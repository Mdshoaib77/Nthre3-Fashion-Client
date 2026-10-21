// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { FaRegWindowClose } from "react-icons/fa";
// import { FaMinus, FaPlus } from "react-icons/fa6";
// import Title from "../components/Title";
// import CartTotal from "../components/CartTotal";
// import Footer from "../components/Footer";

// const Cart = () => {
//     const { products, currency, cartItems, getCartCount, navigate, updateQuantity } =
//         useContext(ShopContext);
//     const [cartData, setCartData] = useState([]);
//     const [quantities, setQuantities] = useState({});

//     useEffect(() => {
//         if (products.length > 0) {
//             const tempData = [];
//             const initialQuantities = {};
//             for (const items in cartItems) {
//                 for (const item in cartItems[items]) {
//                     if (cartItems[items][item] > 0) {
//                         tempData.push({
//                             _id: items,
//                             size: item,
//                             quantity: cartItems[items][item],
//                         });
//                         initialQuantities[`${items}-${item}`] = cartItems[items][item];
//                     }
//                 }
//             }
//             setCartData(tempData);
//             setQuantities(initialQuantities);
//         }
//     }, [cartItems, products]);

//     const increment = (id, size) => {
//         const key = `${id}-${size}`;
//         const newValue = quantities[key] + 1;
//         setQuantities((prev) => ({ ...prev, [key]: newValue }));
//         updateQuantity(id, size, newValue);
//     };

//     const decrement = (id, size) => {
//         const key = `${id}-${size}`;
//         if (quantities[key] > 1) {
//             const newValue = quantities[key] - 1;
//             setQuantities((prev) => ({ ...prev, [key]: newValue }));
//             updateQuantity(id, size, newValue);
//         }
//     };

//     return (
//         <div>
//             <div className="bg-primary mb-16">
//                 <div className="max-padd-container py-10">
//                     {/* Title */}
//                     <div className="flexStart gap-x-4">
//                         <Title title1={"Cart"} title2={"List"} title1Styles={"h3"} />
//                         <h5 className="medium-15 text-gray-30 relative bottom-1.5">
//                             ({getCartCount()} Items)
//                         </h5>
//                     </div>
//                     {/* Container */}
//                     <div className="mt-6">
//                         {cartData.map((item, i) => {
//                             const productData = products.find(
//                                 (product) => product._id === item._id
//                             );
//                             const key = `${item._id}-${item.size}`;

//                             return (
//                                 <div key={i} className="rounded-lg bg-white p-2 mb-3">
//                                     <div className="flex items-center gap-x-3">
//                                         <div className="flex items-start gap-6">
//                                             <img
//                                                 src={productData.image[0]}
//                                                 alt="productImg"
//                                                 className="w-16 sm:w-18 rounded"
//                                             />
//                                         </div>
//                                         <div className="flex flex-col w-full">
//                                             <div className="flexBetween">
//                                                 <h5 className="h5 !my-0 line-clamp-1">
//                                                     {productData.mame}
//                                                 </h5>
//                                                 <FaRegWindowClose onClick={() => updateQuantity(item._id, item.size, 0)} className="cursor-pointer text-secondary" />
//                                             </div>
//                                             <p className="bold-14 my-0.5">{item.size}</p>
//                                             <div className="flexBetween">
//                                                 <div className="flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-primary">
//                                                     <button
//                                                         onClick={() => decrement(item._id, item.size)}
//                                                         className="p-1.5 bg-white text-secondary rounded-full shadow-md"
//                                                     >
//                                                         <FaMinus className="text-xs" />
//                                                     </button>
//                                                     <p className="px-2">{quantities[key]}</p>
//                                                     <button
//                                                         onClick={() => increment(item._id, item.size)}
//                                                         className="p-1.5 bg-white text-secondary rounded-full shadow-md"
//                                                     >
//                                                         <FaPlus className="text-xs" />
//                                                     </button>
//                                                 </div>
//                                                 <h4 className="h4">
//                                                     {currency}
//                                                     {productData.price}
//                                                 </h4>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                     <div className="flex my-20">
//                         <div className="w-full sm:w-[450px]">
//                             <CartTotal />
//                             <button onClick={()=>navigate('/place-order')} className="btn-secondary mt-7">Proceed to Checkout</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default Cart;


import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaRegWindowClose } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import Footer from "../components/Footer";
import { parseCartKey } from "../utils/cartKey";
import { resolveColorHex } from "../utils/colorUtils";

const Cart = () => {
    const { products, currency, cartItems, getCartCount, navigate, updateQuantity, getEffectivePrice } =
        useContext(ShopContext);
    const [cartData, setCartData] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            const initialQuantities = {};
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        // `item` is the cart key — plain size, or "size__color"
                        // for products where a color was selected.
                        const { size, color } = parseCartKey(item);
                        tempData.push({
                            _id: items,
                            key: item,
                            size,
                            color,
                            quantity: cartItems[items][item],
                        });
                        initialQuantities[`${items}-${item}`] = cartItems[items][item];
                    }
                }
            }
            setCartData(tempData);
            setQuantities(initialQuantities);
        }
    }, [cartItems, products]);

    const increment = (id, cartKey) => {
        const key = `${id}-${cartKey}`;
        const newValue = (quantities[key] || 0) + 1;
        setQuantities((prev) => ({ ...prev, [key]: newValue }));
        updateQuantity(id, cartKey, newValue);
    };

    const decrement = (id, cartKey) => {
        const key = `${id}-${cartKey}`;
        if (quantities[key] > 1) {
            const newValue = quantities[key] - 1;
            setQuantities((prev) => ({ ...prev, [key]: newValue }));
            updateQuantity(id, cartKey, newValue);
        } else if (quantities[key] === 1) {
            // 1 থেকে কমিয়ে 0 করলে আইটেমটি কার্ট থেকে রিমুভ হয়ে যাবে
            updateQuantity(id, cartKey, 0);
        }
    };

    return (
        <div>
            <div className="bg-primary mb-16">
                <div className="max-padd-container py-10">
                    {/* Title */}
                    <div className="flexStart gap-x-4">
                        <Title title1={"Cart"} title2={"List"} title1Styles={"h3"} />
                        <h5 className="medium-15 text-gray-30 relative bottom-1.5">
                            ({getCartCount()} Items)
                        </h5>
                    </div>
                    {/* Container */}
                    <div className="mt-6">
                        {cartData.map((item, i) => {
                            const productData = products.find(
                                (product) => product._id === item._id
                            );

                            // Safe Check: Skip rendering if product is missing in database
                            if (!productData) return null;

                            const key = `${item._id}-${item.key}`;

                            return (
                                <div key={i} className="p-3 mb-3 bg-white sm:p-4 rounded-2xl ring-1 ring-[color:var(--line)] shadow-soft transition-shadow duration-500 hover:shadow-lift">
                                    <div className="flex items-center gap-x-4 sm:gap-x-5">
                                        <div className="flex items-start gap-6">
                                            <img
                                                src={productData.image[0]}
                                                alt="productImg"
                                                className="w-20 sm:w-24 rounded-xl aspect-[5/6] object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col w-full min-w-0">
                                            <div className="flexBetween">
                                                <h5 className="h5 !my-0 line-clamp-1">
                                                    {productData.name} {/* Fixed typo 'mame' */}
                                                </h5>
                                                <FaRegWindowClose
                                                    onClick={() => updateQuantity(item._id, item.key, 0)}
                                                    className="text-xl cursor-pointer text-gray-400 shrink-0 transition-colors duration-300 hover:text-secondary"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2 my-0.5 flex-wrap">
                                                <p className="bold-14">{item.size}</p>
                                                {item.color && (
                                                    <span className="flex items-center gap-1.5 text-xs text-gray-30">
                                                        <span
                                                            className="w-3.5 h-3.5 rounded-full ring-1 ring-slate-900/15 shrink-0"
                                                            style={{ backgroundColor: resolveColorHex(item.color) }}
                                                            title={item.color}
                                                        ></span>
                                                        {item.color}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flexBetween flex-wrap gap-2">
                                                <div className="flex items-center overflow-hidden rounded-full ring-1 ring-[color:var(--line)] bg-primary">
                                                    <button
                                                        onClick={() => decrement(item._id, item.key)}
                                                        className="p-2.5 text-secondary transition-colors duration-300 bg-white rounded-full shadow-soft hover:bg-secondary hover:text-white"
                                                    >
                                                        <FaMinus className="text-xs" />
                                                    </button>
                                                    <p className="px-3 font-semibold tabular-nums text-tertiary dark:text-white">{quantities[key]}</p>
                                                    <button
                                                        onClick={() => increment(item._id, item.key)}
                                                        className="p-2.5 text-secondary transition-colors duration-300 bg-white rounded-full shadow-soft hover:bg-secondary hover:text-white"
                                                    >
                                                        <FaPlus className="text-xs" />
                                                    </button>
                                                </div>
                                                <h4 className="h4 !mb-0 !text-[18px] tabular-nums">
                                                    {currency}
                                                    {getEffectivePrice(productData)}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex my-12 sm:my-20">
                        <div className="w-full sm:w-[450px]">
                            <CartTotal />
                            <button
                                onClick={() => navigate("/place-order")}
                                className="btn-secondary mt-7 w-full sm:w-auto min-h-12"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Cart;