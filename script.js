const header = document.querySelector(".header")
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")

const headerDiv = document.createElement("div")
headerDiv.classList.add("title")
headerDiv.innerHTML = "<h1>Dog Caresheet</h1>"
header.append(headerDiv)

const leftPnl = document.createElement("div")
leftPnl.classList.add("leftpnl")
const leftImgs = document.createElement("div")
leftImgs.classList.add("leftimgs")

const dogImg1 = document.createElement("img")
dogImg1.classList.add("dogimgs")
dogImg1.src = "imgs/dog1.jpg"
leftImgs.append(dogImg1)

const dogImg2 = document.createElement("img")
dogImg2.classList.add("dogimgs")
dogImg2.src = "imgs/dog2.jpg"
leftImgs.append(dogImg2)

leftPnl.append(leftImgs)
main.append(leftPnl) 


const middlePnl = document.createElement("div")
middlePnl.classList.add("middlepnl")
const topDiv = document.createElement("div")
topDiv.classList.add("topDiv")
topDiv.innerHTML = `<p>You just adopted/rescued your first dog? or maybe even purchased your pup. It's always an exciting time to bring a new family member home, but dogs are a huge commitment. They require lots of care and attention. Here is a start up list to help you with basic necessities. </p> 
                    <br>`
const list = document.createElement("div")
list.classList.add("list")
list.innerHTML = `<ul>
                    <li>Complete and balanced, age/breed appropriate dog food</li>  
                    <li>Food and water bowls (preferably stainless steel material)</li>  
                    <li>collar and leash</li>  
                    <li>ID tag</li>
                    <li>kennel and/or doghouse</li>  
                    <li>toys age and size appropriate</li>  
                    <li>training treats</li>  
                    <li>grooming supplies</li>
                    <li>dental hygiene supplies</li>
                    <li>kennel bed and/or mat</li>
                    <li>flea & tick preventive</li>
                    <li>Dog safe surface cleaners</li>
                  </ul>
                  <br>
                  <p>Some other things are optional such as: Dog clothes, Dog multivitamins, and depending if, how,  and where you're potty training your new dog you might need potty training pads. </p>`
topDiv.append(list)

const middleDiv = document.createElement("div")
middleDiv.classList.add("middleDiv")
const bottomDiv = document.createElement("div")
bottomDiv.classList.add("bottomDiv")

middlePnl.append(topDiv)
middlePnl.append(middleDiv)
middlePnl.append(bottomDiv)

main.append(middlePnl)

const rightPnl = document.createElement("div")
rightPnl.classList.add("rightpnl")
const rightImgs = document.createElement("div")
rightImgs.classList.add("rightimgs")

const dogImg3 = document.createElement("img")
dogImg3.classList.add("dogimgs")
dogImg3.src = "imgs/dog3.jpg"
rightImgs.append(dogImg3)

const dogImg4 = document.createElement("img")
dogImg4.classList.add("dogimgs")
dogImg4.src = "imgs/dog4.jpg"
rightImgs.append(dogImg4)

rightPnl.append(rightImgs)
main.append(rightPnl)






