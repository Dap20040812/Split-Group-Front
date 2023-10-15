import React, { useEffect, useState} from "react";
import { BalanceContainer } from "../common/Container";
import { BalanceText, CurrencyText } from "../common/Text";
import { getBalance } from "../../services/TransactionServices";
import { useSelector } from "react-redux";
import { selecUserUid } from "../../features/user/UserSlice";
import getUser from "../../query/loginClaro";

const Balance = () => {
    const [balance, setBalance] = useState(null);


    useEffect(() => {
        const setUser = async () => {
            await getUser().then((response) => {
                getBalance(response[0].id).then((response)=>{
                    setBalance(response.data[0].balance.split(".")[0])
                })
            })
        }
        setUser();
    },[]);
    return(
        <BalanceContainer>
            {balance &&
            <>
                <BalanceText>$ {parseFloat(balance).toLocaleString("en-US")}</BalanceText>
                <CurrencyText>COP</CurrencyText>
            </>}
        </BalanceContainer>
    )
}

export default Balance;