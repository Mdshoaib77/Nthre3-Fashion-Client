// import React, { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//     const currency = "$";
//     const delivery_charges = 10;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;
//     const navigate = useNavigate();
//     const [products, setProducts] = useState([]);
//     const [search, setSearch] = useState("");
//     const [showSearch, setShowSearch] = useState(true);
//     const [token, setToken] = useState("");
//     const [cartItems, setCartItems] = useState({});

//     // Adding items to cart
//     const addToCart = async (itemId, size) => {
//         if (!size) {
//             toast.error("Please select a size first");
//             return;
//         }
//         let cartData = structuredClone(cartItems);

//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             } else {
//                 cartData[itemId][size] = 1;
//             }
//         } else {
//             cartData[itemId] = {};
//             cartData[itemId][size] = 1;
//         }
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(
//                     backendUrl + "/api/cart/add",
//                     { itemId, size },
//                     { headers: { token } }
//                 );
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     // Get cart count
//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const items in cartItems) {
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalCount += cartItems[items][item];
//                     }
//                 } catch (error) {
//                     console.log(error);
//                 }
//             }
//         }
//         return totalCount;
//     };

//     // updating the quantity
//     const updateQuantity = async (itemId, size, quantity) => {
//         let cartData = structuredClone(cartItems);
//         cartData[itemId][size] = quantity;
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(
//                     backendUrl + "/api/cart/update",
//                     { itemId, size, quantity },
//                     { headers: { token } }
//                 );
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     // Getting total cart amount
//     const getCartAmount = () => {
//         let totalAmount = 0;
//         for (const items in cartItems) {
//             let itemInfo = products.find((product) => product._id === items);
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalAmount += itemInfo.price * cartItems[items][item];
//                     }
//                 } catch (error) {
//                     console.log(error);
//                 }
//             }
//         }
//         return totalAmount;
//     };

//     // Getting all products
//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(backendUrl + "/api/product/list");
//             if (response.data.success) {
//                 setProducts(response.data.products);
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     // Get user cart
//     const getUserCart = async (token) => {
//         try {
//             const response = await axios.post(
//                 backendUrl + "/api/cart/get",
//                 {},
//                 { headers: { token } }
//             );
//             if (response.data.success) {
//                 setCartItems(response.data.cartData);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     useEffect(() => {
//         if (!token && localStorage.getItem("token")) {
//             setToken(localStorage.getItem("token"));
//             getUserCart(localStorage.getItem("token"));
//         }
//         getProductsData();
//     }, []);

//     const value = {
//         currency,
//         delivery_charges,
//         navigate,
//         products,
//         token,
//         setToken,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         addToCart,
//         getCartCount,
//         cartItems,
//         setCartItems,
//         updateQuantity,
//         getCartAmount,
//         backendUrl,
//     };

//     return (
//         <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;


import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { buildCartKey, parseCartKey } from "../utils/cartKey";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "৳";

    // Delivery charge options: Inside Bogura vs Outside Bogura.
    // "location" defaults to "inside" and drives the actual delivery_charges value.
    const DELIVERY_CHARGES = {
        inside: 60,
        outside: 120,
    };
    const [deliveryLocation, setDeliveryLocation] = useState("inside");
    const delivery_charges = DELIVERY_CHARGES[deliveryLocation];

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoriesLoading, setCategoriesLoading] = useState(true);
    const [categoriesError, setCategoriesError] = useState("");
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(true);
    const [token, setToken] = useState("");
    const [cartItems, setCartItems] = useState({});

    // Returns the price that should actually be charged for a product:
    // offerPrice when set, otherwise regularPrice, falling back to the
    // old "price" field for any records that haven't been migrated yet.
    const getEffectivePrice = (product) => {
        if (!product) return 0;
        return product.offerPrice || product.regularPrice || product.price || 0;
    };

    // Adding items to cart. `color` is optional — products without colors
    // (or without colors for the selected size) simply omit it, which keeps
    // the cart key as plain "size" exactly like before.
    const addToCart = async (itemId, size, color) => {
        if (!size) {
            toast.error("Please select a size first");
            return;
        }
        const key = buildCartKey(size, color);
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][key]) {
                cartData[itemId][key] += 1;
            } else {
                cartData[itemId][key] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][key] = 1;
        }
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(
                    backendUrl + "/api/cart/add",
                    { itemId, size, color },
                    { headers: { token } }
                );
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    // Get cart count
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalCount;
    };

    // Updating the quantity. `size` here may already be a composite
    // "size__color" cart key (as read back from cartItems) — pass the
    // matching `color` too so the backend key is built the same way.
    const updateQuantity = async (itemId, size, colorOrQuantity, maybeQuantity) => {
        // Supports both updateQuantity(itemId, key, quantity) — key already
        // composite — and updateQuantity(itemId, size, color, quantity).
        let color = "";
        let quantity;
        if (maybeQuantity === undefined) {
            quantity = colorOrQuantity;
        } else {
            color = colorOrQuantity || "";
            quantity = maybeQuantity;
        }
        const key = color ? buildCartKey(size, color) : size;

        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId][key] = quantity;
            setCartItems(cartData);
        }

        if (token) {
            try {
                const { size: rawSize, color: rawColor } = parseCartKey(key);
                await axios.post(
                    backendUrl + "/api/cart/update",
                    { itemId, size: rawSize, color: rawColor, quantity },
                    { headers: { token } }
                );
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    // Getting total cart amount
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (!itemInfo) continue; // Safe Check: Skip if product is deleted or not found

            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += getEffectivePrice(itemInfo) * cartItems[items][item];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalAmount;
    };

    // Getting all products
    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/product/list");
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    // Getting all ACTIVE categories/subcategories (dynamic, admin-managed).
    // Powers the "Shop by Category" homepage section, the Navbar (if it
    // ever grows category dropdowns), and the Collection page filters —
    // replacing the old hard-coded ["Men","Women","Kids"] style arrays.
    const getCategoriesData = async () => {
        try {
            setCategoriesLoading(true);
            const response = await axios.get(backendUrl + "/api/category/list");
            if (response.data.success) {
                setCategories(response.data.categories);
                setCategoriesError("");
            } else {
                setCategoriesError(response.data.message || "Failed to load categories");
            }
        } catch (error) {
            console.log(error);
            setCategoriesError(error.message || "Failed to load categories");
        } finally {
            setCategoriesLoading(false);
        }
    };

    // Top-level categories only (Men, Women, Kids...), sorted by displayOrder.
    const topLevelCategories = categories.filter((c) => !c.parentCategory);

    // Subcategories belonging to a given top-level category name (e.g. "Men").
    const getSubcategoriesFor = (categoryName) => {
        const parent = topLevelCategories.find((c) => c.name === categoryName);
        if (!parent) return [];
        return categories.filter(
            (c) => c.parentCategory && (c.parentCategory._id || c.parentCategory) === parent._id
        );
    };

    // Get user cart
    const getUserCart = async (token) => {
        try {
            const response = await axios.post(
                backendUrl + "/api/cart/get",
                {},
                { headers: { token } }
            );
            if (response.data.success) {
                setCartItems(response.data.cartData);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (!token && localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            getUserCart(localStorage.getItem("token"));
        }
        getProductsData();
        getCategoriesData();
    }, []);

    const value = {
        currency,
        delivery_charges,
        deliveryLocation,
        setDeliveryLocation,
        DELIVERY_CHARGES,
        navigate,
        products,
        categories,
        categoriesLoading,
        categoriesError,
        topLevelCategories,
        getSubcategoriesFor,
        token,
        setToken,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        addToCart,
        getCartCount,
        cartItems,
        setCartItems,
        updateQuantity,
        getCartAmount,
        getEffectivePrice,
        backendUrl,
    };

    return (
        <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
    );
};

export default ShopContextProvider;