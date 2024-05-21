import { useState } from 'react';
import orderCover from '../../../assets/order.jpg'
import Cover from '../../Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';


import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
const Order = () => {
    const categories = ['salad', 'pizza', 'soup','dessert','drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drink = menu.filter(item => item.category === 'drinks')
     return (
        <div>
            <Cover img={orderCover} title='Order Food' des='Place Your Order Here'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-[#BB8506] mx-[470px] my-20" >
                    <Tab >Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab cards={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab cards={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab cards={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab cards={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab cards={drink}></OrderTab>
                </TabPanel>
            </Tabs>
        </div >
    );
};

export default Order;