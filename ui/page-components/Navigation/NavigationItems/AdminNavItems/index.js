import React from 'react'
import NavigationItem from '../NavigationItem'

const AdminNavItems = () => {

    return (
        <>
            <NavigationItem link="/admin/dashboard" exact>
                Dashboards
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