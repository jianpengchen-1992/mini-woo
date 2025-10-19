"use client"
import {useCallback, useEffect} from "react";
import {useTelegram} from "@/providers/telegram-provider";
import {useAppContext} from "@/providers/context-provider";
import StoreFront from "@/components/store-front";
import OrderOverview from "@/components/order-overview";
import ProductOverview from "@/components/product-overview";

export default function Home() {
    const {webApp} = useTelegram()
    const {state, dispatch} = useAppContext()

    const handleCheckout = useCallback(() => {
        const itemCount = Array.from(state.cart.values()).reduce((acc, item) => acc + item.count, 0)
        if (itemCount === 0) {
            webApp?.showAlert("Your order is empty. Please add a product to the cart first.")
            return
        }

        webApp?.showAlert("Ordering is disabled in catalog mode. Please contact us to place your order.")
        webApp?.HapticFeedback?.notificationOccurred('warning')
    }, [webApp, state.cart])

    useEffect(() => {
        const callback = state.mode === "order" ? handleCheckout :
            () => dispatch({type: "order"})
        webApp?.MainButton.setParams({
            text_color: '#fff',
            color: '#31b545'
        }).onClick(callback)
        webApp?.BackButton.onClick(() => dispatch({type: "storefront"}))
        return () => {
            //prevent multiple call
            webApp?.MainButton.offClick(callback)
        }
    }, [webApp, state.mode, handleCheckout])

    useEffect(() => {
        if (state.mode === "storefront")
            webApp?.BackButton.hide()
        else
            webApp?.BackButton.show()

        if (state.mode === "order")
            webApp?.MainButton.setText("CHECKOUT")
        else
            webApp?.MainButton.setText("VIEW ORDER")
    }, [state.mode])

    useEffect(() => {
        if (state.cart.size !== 0) {
            webApp?.MainButton.show()
            webApp?.enableClosingConfirmation()
        } else {
            webApp?.MainButton.hide()
            webApp?.disableClosingConfirmation()
        }
    }, [state.cart.size])

    return (
        <main className={`${state.mode}-mode`}>
            <StoreFront/>
            <ProductOverview/>
            <OrderOverview/>
        </main>
    )
}
