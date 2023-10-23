import { createSlice } from "@reduxjs/toolkit";



const initialState = { food : [
    {
        id : "f_1",
        name : 'چیز برگر',
        price : 100000,
        group : 'burger',
        number : 0,
        show : true
    }
    , 
    {
        id : "f_2",
        name : 'دوبل برگر',
        price : 150000,
        group : 'burger',
        number : 0,
        show : false
    }
    , 
    {
        id : "f_3",
        name : 'برگر تنوری',
        price : 130000,
        group : 'burger',
        number : 0,
        show : false
    }
    , 
    {
        id : "f_4",
        name : 'برگر مخصوص',
        price : 180000,
        group : 'burger',
        number : 0,
        show : false
    }
    , 
    {
        id : "f_5",
        name : 'برگر',
        price : 90000,
        group : 'burger',
        number : 0,
        show : true
    }
    , 
    {
        id : "f_6",
        name : 'غول برگر',
        price : 230000,
        group : 'burger',
        number : 0,
        show : true
    }
    , 
    {
        id : "f_7",
        name : 'آب معدنی',
        price : 15000,
        group : 'Beverage',
        number : 0,
        show : false
    }
    , 
    {
        id : "f_8",
        name : 'هی دی',
        price : 35000,
        group : 'Beverage',
        number : 0,
        show : false
    }
    
    , 
    {
        id : "f_9",
        name : ' کوکاکولا مشکی ',
        price : 20000,
        group : 'Beverage',
        number : 0,
        show : true
    }
    , 
    {
        id : "f_10",
        name : 'نوشابه فانتا',
        price : 20000,
        group : 'Beverage',
        number : 0,
        show : false
    }
    , 
    {
        id : "f_11",
        name : 'نوشابه کوکاکولا زیرو',
        price : 21000,
        group : 'Beverage',
        number : 0,
        show : false
    }
    , 
    {
        id : "f_12",
        name : 'اسپرایت',
        price : 18000,
        group : 'Beverage',
        number : 0,
        show : false
    }
    , 
    {
        id : "f_13",
        name : 'پیتزا مینی',
        price : 55000,
        group : 'pizza',
        number : 0,
        show : false
    }
    , 
    {
        id : "f_14",
        name : 'پیتزا سبزیجات',
        price : 90000,
        group : 'pizza',
        number : 0,
        show : false
    }
    , 
    {
        id : "f_15",
        name : 'پیتزا پپرونی مخصوص',
        price : 180000,
        group : 'pizza',
        number : 0,
        show : false
    }
    , 
    {
        id : "f_16",
        name : 'پیتزا پپرونی',
        price : 130000,
        group : 'pizza',
        number : 0,
        show : false
    }
    , 
    {
        id : "f_17",
        name : 'پیتزا یک نفره',
        price : 110000,
        group : 'pizza',
        number : 0,
        show : true
    }
    , 
    {
        id : "f_18",
        name : 'پیتزا مخصوص',
        price : 145000,
        group : 'pizza',
        number : 0,
        show : true
    }
   
],
user : {
    login : false,
    name : false,
    location : false,
    phonenumber : false
}
}

function add (state , action){    
    state.food.map((i,index)=>  {
        if(i.id === action.payload){
            i.number += 1;
            
        }
    })  
}


function notification(action){
    

    
    document.getElementById('Notification_text').style.right = '0' ;
    setTimeout(() =>{
        
        document.getElementById('Notification_text').style.right = '-300%' ;
    },2000)


}

function remove (state , action){
    initialState.food.map((i,index)=> i.id === action.payload ? state.food[index].number -= 1 : console.log('error'))
    
}
function Account(state){
    state.user.login = true;
    state.user.location = 'مکان آزمایشی';
    state.user.phonenumber = '09000000000';
    state.user.name = 'آزمایشی';
}

const Data = createSlice({
    name : 'data',
    initialState,
    reducers : {
        add,
        remove,
        Account,
        notification
    }
})


export const {add : addAction , remove : removeAction, Account: AccountAction , notification : notificationAction} = Data.actions


export default Data.reducer;