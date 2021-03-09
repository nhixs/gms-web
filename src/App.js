import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./pages/login"
import Home from "./pages/home"
import OfficerList from './pages/officerList';
import OfficerNew from './pages/officerNew';
import ClientList from './pages/clientList';
import ClientNew from './pages/clientNew';
import DepositList from './pages/depositList';
import LoanList from './pages/loanList';
import DepositProductList from "./pages/depositProductList";
import LoanProductList from "./pages/loanProductList.js";
import DepositProductNew from "./pages/depositProductNew";
import LoanProductNew from "./pages/loanProductNew";
import ApplyLoan from "./pages/applyLoan";
import ApplyDeposit from "./pages/applyDeposit";
import TransactionDeposit from "./pages/transactionDeposit";
import TransactionLoan from "./pages/transactionLoan";
import SubmissionDetail from "./pages/submissionDetail";
import ClientDetail from "./pages/clientDetail";
import Example from "./pages/example";

const App = () => {
  const officer = useSelector(state => state.officer);
  console.log(officer)

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/officer/list" exact component={OfficerList} />
        <Route path="/officer/new" exact component={OfficerNew} />
        <Route path="/client/list" exact component={ClientList} />
        <Route path="/client/new" exact component={ClientNew} />
        <Route path="/deposit/list" exact component={DepositList} />
        <Route path="/loan/list" exact component={LoanList} />
        <Route path="/product/deposit/list" exact component={DepositProductList} />
        <Route path="/product/loan/list" exact component={LoanProductList} />
        <Route path="/product/deposit/new" exact component={DepositProductNew} />
        <Route path="/product/loan/new" exact component={LoanProductNew} />
        <Route path="/deposit/apply" exact component={ApplyDeposit} />
        <Route path="/loan/apply" exact component={ApplyLoan} />
        <Route path="/transaction/loan" exact component={TransactionLoan} />
        <Route path="/transaction/deposit" exact component={TransactionDeposit} />
        <Route path="/submission/details" exact component={SubmissionDetail} />
        <Route path="/client/details" exact component={ClientDetail} />
        <Route path="/example" exact component={Example} />


      </Switch>
    </BrowserRouter>

  )
}

export default App;
