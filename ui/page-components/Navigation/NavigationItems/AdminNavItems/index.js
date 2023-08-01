import React from 'react'
import NavigationItem from '../NavigationItem'

const AdminNavItems = () => {

    return (
        <>
            <NavigationItem link="/menu" exact>
                Menu
            </NavigationItem>
            <NavigationItem link="/admin/dashboard" exact>
                Dashboard
            </NavigationItem>
            <NavigationItem link="/admin/orders" exact>
                Orders
            </NavigationItem>
            <NavigationItem link="/admin/products" exact>
                Products
            </NavigationItem>
            <NavigationItem link="/admin/discounts" exact>
                Discounts
            </NavigationItem>
        </>
    )
}

export default AdminNavItems