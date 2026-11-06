const STORE_KEY = "petsTravelDemo";
const defaults = {settings:{businessName:"Pets Travel",email:"Add your business email",phone:"Add your phone number",tagline:"Safe journeys. Happy pets."},bookings:[]};
function readStore(){try{return {...defaults,...JSON.parse(localStorage.getItem(STORE_KEY)||"{}")}}catch{return structuredClone(defaults)}}
function writeStore(data){localStorage.setItem(STORE_KEY,JSON.stringify(data))}
function applySettings(){const data=readStore();document.querySelectorAll("[data-setting]").forEach(el=>{const value=data.settings[el.dataset.setting];if(value)el.textContent=value})}
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
applySettings();
const dateInput=document.querySelector('input[name="travelDate"]'); if(dateInput) dateInput.min=new Date().toISOString().slice(0,10);
document.getElementById("bookingForm").addEventListener("submit",e=>{
 e.preventDefault();const form=e.currentTarget;const data=readStore();const booking=Object.fromEntries(new FormData(form).entries());booking.id="PT-"+Date.now().toString().slice(-7);booking.status="New";booking.createdAt=new Date().toISOString();data.bookings.unshift(booking);writeStore(data);
 document.getElementById("formMessage").textContent="Thank you — your request has been saved in this demo. The business owner will need a connected booking/email service to receive live enquiries.";form.reset();dateInput.min=new Date().toISOString().slice(0,10);
});