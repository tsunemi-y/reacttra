import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
 
const App = () => {
    const [shopList, setShopList] :any = useState(0);
    // 買い物リストAPIから値取得
    useEffect(() => {
        const fetchList = async () => {
            const url :string = 'api/shoppingList';
            const { data } :any = await axios.get(url);
            setShopList(data);
        }
        fetchList();
    });

    

    return (
        <div className="container">
            <h1 className="mainTitle">買い物リスト</h1>
            <div className="form">
                <form className="addList">
                    <input type="text" />
                    <button>追加</button>
                </form>


                {Object.keys(shopList).map(key => (
                    <form action="" className="addList" key={key}>
                        <input type="text" defaultValue={shopList[key].name}/>
                        <button>変更</button>
                        <button>削除</button>
                    </form>
                ), console.log(shopList))}
            </div>
        </div>
    )
}
 
ReactDOM.render(
    <App />,
    document.getElementById('app')
)
