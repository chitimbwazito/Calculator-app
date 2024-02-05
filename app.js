let del = document.getElementById("del");
let two = document.getElementById("two");
let body = document.querySelector("body");
let one = document.getElementById("one");
let three = document.getElementById("three");
let total = document.getElementById("total");
let bottom = document.getElementById("bottom");
let equal = document.getElementById("equal");
let tops = document.getElementById("top");
let toggle = document.getElementById("circle");
let reset = document.getElementById("reset")
let button = document.querySelectorAll(".bottom");

del.addEventListener('click', function(){
        let free = total.textContent;
        total.textContent = free.slice(0, free.length - 1);
})

one.addEventListener('click', function(){
    document.getElementById("box").style.backgroundColor = "hsl(223, 31%, 20%)";
    toggle.style.backgroundColor = "hsl(6, 63%, 50%)"
    toggle.style.left = '5%';
    body.classList.remove("active1");
    total.classList.remove("active1");
    bottom.classList.remove("active1");
    equal.classList.remove("active1");
    tops.classList.remove("active1");
    del.classList.remove("active1");
    reset.classList.remove("active1");
    body.classList.remove("active2");
    total.classList.remove("active2");
    bottom.classList.remove("active2");
    equal.classList.remove("active2");
    tops.classList.remove("active2");
    del.classList.remove("active2");
    reset.classList.remove("active2");
})

two.addEventListener('click', function(){
    document.getElementById("box").style.backgroundColor = "hsl(0, 5%, 81%)";
    toggle.style.backgroundColor = "hsl(25, 98%, 40%)";
    toggle.style.left = '36%';
    body.classList.add("active1");
    total.classList.add("active1");
    bottom.classList.add("active1");
    equal.classList.add("active1");
    tops.classList.add("active1");
    del.classList.add("active1");
    reset.classList.add("active1");
    body.classList.remove("active2");
    total.classList.remove("active2");
    bottom.classList.remove("active2");
    equal.classList.remove("active2");
    tops.classList.remove("active2");
    del.classList.remove("active2");
    reset.classList.remove("active2");
})

three.addEventListener('click', function(){
    document.getElementById("box").style.backgroundColor = "hsl(268, 71%, 12%)";
    toggle.style.backgroundColor = "hsl(176, 100%, 44%)"
    toggle.style.left = '70%';
    body.classList.add("active2");
    body.classList.remove("active1");
    total.classList.remove("active1");
    bottom.classList.remove("active1");
    equal.classList.remove("active1");
    tops.classList.remove("active1");
    del.classList.remove("active1");
    reset.classList.remove("active1");
    tops.classList.add("active2");   
    total.classList.add("active2"); 
    bottom.classList.add("active2");
    reset.classList.add("active2");
    del.classList.add("active2");
    equal.classList.add("active2");
})
