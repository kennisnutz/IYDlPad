import React from 'react'
import Transactions from '../transactions'

export const 
 Table= () => {
  return (
    <table>
        <thead>
            <th>Transaction ID</th>
            <th>Txn Method</th>
            <th>Time</th>
            <th>From</th>
            <th>To</th>
            <th>Token Id</th>                        

        </thead>
        <tbody>
            {
                Transactions.map(transaction => {
                return (
                    <tr>
                        <td><a href="">${transaction.transaction_id}</a></td>
                        <td class={transaction.transaction_method=== "Mint"? 'danger': 
                            transaction.transaction_method=== "Trsnsfer"? 
                            'warning': 'primary' }>
                            {transaction.transaction_method}
                        </td>
                        <td class="primary">{transaction.time}</td>
                        <td>{transaction.from}</td>
                        <td>{transaction.to}</td>
                        <td>{transaction.token_id}</td>
                    </tr>
                )
                   
                      
                          
                       
                       
                })
            }
            
        </tbody>
    </table>
  )
}

export default Table;