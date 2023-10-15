import React, { useEffect, useState} from "react";
import { BalanceContainer } from "../common/Container";
import { BalanceText, CurrencyText } from "../common/Text";
import { getBalance } from "../../services/TransactionServices";
import { useSelector } from "react-redux";
import { selecUserName, selecUserUid } from "../../features/user/UserSlice";

const Balance = () => {
    const [balance, setBalance] = useState(null);
    const user = useSelector(selecUserUid);
    useEffect(() => {
        getBalance(user).then((response)=>{
            setBalance(response.data[0].balance.split(".")[0])
        })
        console.log(user);
    },[]);
    return(
        <BalanceContainer>
            {balance&&
            <>
                <BalanceText>$ {parseFloat(balance).toLocaleString("en-US")}</BalanceText>
                <CurrencyText>COP</CurrencyText>
            </>}
        </BalanceContainer>
    )
}

export default Balance;