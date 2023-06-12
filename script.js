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






