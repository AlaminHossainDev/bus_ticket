// select all button
const allBtn = document.getElementsByClassName("btn-select");
let count = 0;
let count2 = 40;
let totalTicketPrice = 0;
let CouponApplied = false;

// count seat
for(const btn of allBtn){
    btn.addEventListener('click', function(event){
        if(count < 4){
            count = count + 1;
            count2 = count2 - 1;
            totalTicketPrice = count * 550;
            setInnerText("total-ticket-price", totalTicketPrice);
            grandTotalPrice();
            setInnerText("seat-left", count2);
            setInnerText("seat-count", count);

            // Change bg-button color & removed previous bg-button-color
            btn.classList.add('bg-[#1DD100]', 'text-white');
            btn.classList.remove('bg-[#F7F8F8]');

            // get all seat Name, class , price
            const seatName = event.target.innerText
            const SeatPrice = 550;
            const seatClass = "Economy"
            const selectedContainer = document.getElementById('selected-container')
            const tr = document.createElement("tr");

            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            td1.innerText = seatName;
            td2.innerText = seatClass;
            td3.innerText = SeatPrice;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            selectedContainer.appendChild(tr);
        }else{
            alert("You can only select 4 seats at a time");
        }
        
    })
}

// grand total price 
function grandTotalPrice(status){
    const totalCoast = totalTicketPrice;
    if(status == undefined){
        document.getElementById("grand-total").innerText = totalCoast;
    }else{
        const couponCode = document.getElementById("coupon-code").value;
        const couponDiv = document.getElementById("couponDiv");
        if(couponCode == "NEW15"){
            discounted = .15 * totalCoast;
            document.getElementById("grand-total").innerText = totalCoast -discounted;
            couponDiv.classList.add("hidden");     
        }else if(couponCode == "Couple 20"){
            discounted = .20 * totalCoast;
            document.getElementById("grand-total").innerText = totalCoast -discounted;
            couponDiv.classList.add("hidden");
        }
        else{
            alert("invalid coupon address")

        }

    }
   
}

// coupon code apply
// inner Text changes function
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
};