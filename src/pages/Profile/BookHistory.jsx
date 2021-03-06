import React from "react";
import Header from "../../layout/Header";
import './History.css'
function BookHsitory(){
    const images = [{
        id:1,
        source:"https://theconferenceshop.com.au/wp-content/uploads/2020/07/Hobart-2.jpg"
    },{
        source:"https://spie.org/images/Graphics/CE/DCS/2021/Special-Events-Technical-2.jpg",
        id:2,
    },{
        id:3,
        source:"https://betasmania.com.au/wp-content/uploads/2020/07/mr-i-with-mr-ii_44478028070_o-scaled-1536x810.jpg"
    }]
    return(
        <div>
            <Header/>
           <div className="history-book">
            <div className="history-title">
                <h1>KID BIRTHDAY PARTY</h1>
                <h3>October 16,2022 9:00 AM - 7:00 PM</h3>
            </div>
            <div className="slideshow">
                <div className="prev"></div>

                <div className="slide">
                    <div class="page">1 / 3</div>
                </div>

                <div className="next"></div>
            </div>

            <div className="Details">
                <div className="detail">
                    <h2>Details</h2>
                    Date
                    <p>October 16</p>
                    Time
                    <p>9:00 am - 7:00 pm6</p>
                    Service Type
                    <p>Birthdat&Private</p>
                </div>
                <div className="detail">
                    <h2>Venue</h2>
                    <p>SandyBay Entertainment</p>
                    <p>1 Churchchill Ave, SandyBay TAS 7005</p>
                </div>
                <div className="detail">
                    <h2>Merchant</h2>
                    <p>LILY KID SERVICE</p>
                    Email
                    <p>Lly@gmail.com</p>
                </div>
            </div>

            {
                <button>
                    CANCEL
                </button>
            }
            
           </div>
           
        </div>
    )
}

export default BookHsitory;