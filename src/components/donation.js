import React, {Component} from 'react' ;

class Donation extends Component {
  render(){
    return(
        <div className="container-fluid py-3">
    <div className="row">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto">
            <div id="pay-invoice" className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h3 className="text-center">Pay Invoice</h3>
                    </div>
                    <form action="/echo" method="post" novalidate="novalidate" className="needs-validation">
                        <div className="form-group text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item"><i className="text-muted fa fa-cc-visa fa-2x"></i></li>
                                <li className="list-inline-item"><i className="fa fa-cc-mastercard fa-2x"></i></li>
                                <li className="list-inline-item"><i className="fa fa-cc-amex fa-2x"></i></li>
                                <li className="list-inline-item"><i className="fa fa-cc-discover fa-2x"></i></li>
                            </ul>
                        </div>
                        <div className="form-group">
                            <label for="cc-payment" className="control-label mb-1">Payment amount</label>
                            <input id="cc-payment" name="cc-payment" type="text" className="form-control" aria-required="true" aria-invalid="false" required value="100.00" />
                            <span className="invalid-feedback">Enter the payment amount</span>
                        </div>
                        <div className="form-group has-success">
                            <label for="cc-name" className="control-label mb-1">Name on card</label>
                            <input id="cc-name" name="cc-name" type="text" className="form-control cc-name" required autocomplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name-error" />
                            <span className="invalid-feedback">Enter the name as shown on credit card</span>
                        </div>
                        <div className="form-group">
                            <label for="cc-number" className="control-label mb-1">Card number</label>
                            <input id="cc-number" name="cc-number" type="tel" className="form-control cc-number identified visa" required="" pattern="[0-9]{16}" />
                            <span className="invalid-feedback">Enter a valid 16 digit card number</span>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label for="cc-exp" className="control-label mb-1">Expiration</label>
                                    <input id="cc-exp" name="cc-exp" type="tel" className="form-control cc-exp" required placeholder="MM / YY" autocomplete="cc-exp" />
                                    <span className="invalid-feedback">Enter the expiration date</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <label for="x_card_code" className="control-label mb-1">Security code</label>
                                <div className="input-group">
                                    <input id="x_card_code" name="x_card_code" type="tel" className="form-control cc-cvc" required autocomplete="off" />
                                    <span className="invalid-feedback order-last">Enter the 3-digit code on back</span>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                        <span className="fa fa-question-circle fa-lg" data-toggle="popover" data-container="body" data-html="true" data-title="Security Code"
                                        data-content="<div className='text-center one-card'>The 3 digit code on back of the card..<div className='visa-mc-cvc-preview'></div></div>"
                                        data-trigger="hover"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="x_zip" className="control-label mb-1">Postal code</label>
                            <input id="x_zip" name="x_zip" type="text" className="form-control" value="" data-val="true" data-val-required="Please enter the ZIP/Postal code" autocomplete="postal-code" />
                            <span className="help-block" data-valmsg-for="x_zip" data-valmsg-replace="true"></span>
                        </div>
                        <div>
                            <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block gradient-bg mr-2">
                                <i className="fa fa-lock fa-lg"></i>&nbsp;
                                <span id="payment-button-amount">Pay $100.00</span>
                                <span id="payment-button-sending" style={{display:'none'}}>Sending…</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
      </div>
    );
  }
}
export default Donation;
