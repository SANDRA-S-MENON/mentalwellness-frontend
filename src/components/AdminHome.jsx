import React from 'react'

const AdminHome = () => {
  return (
    <div className="container">
          {/* <Navadmin/>   */}
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-6">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://img.freepik.com/free-vector/usability-testing-concept-illustration_114360-1878.jpg?t=st=1725479064~exp=1725482664~hmac=363808d93e2246adbfc9358c03edbac6b034d334b5fd245edc7593fc08f96615&w=740" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <br></br><br></br>
                            <h5 className="card-title">VIEW USERS</h5>
                            <a href="/viewuser" className="btn btn-dark">CLICK HERE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="col col-12 col-sm-12 col-md-6">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1259.jpg?t=st=1725478471~exp=1725482071~hmac=481f14226a8e5b098f196fdf431ef576f341878350d32d84407fd969a0ebf402&w=740" className="img-fluid rounded-start" alt="..."/>
                        </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <br></br><br></br>
                            <h5 className="card-title">PRODUCTS</h5>
                            <a href="/producthome" className="btn btn-dark">CLICK HERE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col col-12 col-sm-12 col-md-6">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1259.jpg?t=st=1725478471~exp=1725482071~hmac=481f14226a8e5b098f196fdf431ef576f341878350d32d84407fd969a0ebf402&w=740" className="img-fluid rounded-start" alt="..."/>
                        </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <br></br><br></br>
                            <h5 className="card-title">ORDERS</h5>
                            <a href="/orders" className="btn btn-dark">CLICK HERE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="col col-12 col-sm-12 col-md-6">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1259.jpg?t=st=1725478471~exp=1725482071~hmac=481f14226a8e5b098f196fdf431ef576f341878350d32d84407fd969a0ebf402&w=740" className="img-fluid rounded-start" alt="..."/>
                        </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <br></br><br></br>
                            <h5 className="card-title">URL STORE</h5>
                            <a href="/urls" className="btn btn-dark">CLICK HERE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div className="col col-12 col-sm-12 col-md-6">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1259.jpg?t=st=1725478471~exp=1725482071~hmac=481f14226a8e5b098f196fdf431ef576f341878350d32d84407fd969a0ebf402&w=740" className="img-fluid rounded-start" alt="..."/>
                        </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <br></br><br></br>
                            <h5 className="card-title">Feedback</h5>
                            <a href="/feedbacks" className="btn btn-dark">CLICK HERE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default AdminHome