"use client"

import { useEffect } from "react"

interface ShopifyBuyButtonProps {
  productId: string
  shopDomain: string
}

export default function ShopifyBuyButton({ productId, shopDomain }: ShopifyBuyButtonProps) {
  useEffect(() => {
    // Make sure the Shopify Buy SDK is loaded
    if ((window as any).ShopifyBuy) {
      const client = (window as any).ShopifyBuy.buildClient({
        domain: shopDomain,
        storefrontAccessToken: 'YOUR_STOREFRONT_ACCESS_TOKEN' // Get this from Shopify Admin
      })

      // Create the buy button UI
      const ui = (window as any).ShopifyBuy.UI.init(client)
      
      // Render the buy button
      ui.createComponent('product', {
        id: productId,
        node: document.getElementById('shopify-buy-button-container'),
        moneyFormat: '%24%7B%7Bamount%7D%7D', // ${amount}
        options: {
          product: {
            styles: {
              product: {
                '@media (min-width: 601px)': {
                  'max-width': '100%',
                  'margin-left': '0',
                  'margin-bottom': '50px'
                }
              },
              button: {
                'background-color': '#2563EB', // pro-500 color
                'font-size': '16px',
                'padding-top': '16px',
                'padding-bottom': '16px',
                ':hover': {
                  'background-color': '#1D4ED8' // pro-600 color
                }
              }
            }
          },
          cart: {
            styles: {
              button: {
                'background-color': '#2563EB',
                ':hover': {
                  'background-color': '#1D4ED8'
                }
              }
            }
          },
          toggle: {
            styles: {
              toggle: {
                'background-color': '#2563EB',
                ':hover': {
                  'background-color': '#1D4ED8'
                }
              }
            }
          }
        }
      })
    }
  }, [productId, shopDomain])

  return <div id="shopify-buy-button-container"></div>
}
