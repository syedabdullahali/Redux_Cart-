import Layout from './component/Layout/Layout';
import ShoppingCart from './component/Cart/ShoppingCart';
import Header from './component/Header/Header';
import ItemsCart from './component/Cart/ItemsCart';
import { useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import NotificationMessage from './component/notification/Notification';
import { sendCartData } from './component/store/cart_action';
import { fetchCartData } from './component/store/cart_data';

function App() {
  const allitems = useSelector(state=>state.cartData.books)
  const totalItem = allitems.reduce((total,crrEl)=>total + crrEl.count,0)
  const notificationIs = useSelector((state)=>state.uiInfo.renderNotification)

  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchCartData())
},[dispatch])

 useEffect(()=>{
dispatch(sendCartData(allitems))
 },[allitems,dispatch])

  return (
    <Layout>
      <Header totalItem={totalItem} />
      {notificationIs&&<NotificationMessage/>}
      <ShoppingCart/>
      <ItemsCart/>
    </Layout>
  );
}

export default App;
