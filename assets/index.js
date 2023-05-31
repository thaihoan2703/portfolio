var myBtn = document.getElementById("top-up");
//Khi người dùng cuộn chuột thì gọi hàm scrollFunction
window.onscroll = function () {
  scrollFunction();
};
// khai báo hàm scrollFunction
function scrollFunction() {
  // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    //nếu lớn hơn 400px thì hiện button
    myBtn.style.display = "block";
  } else {
    //nếu nhỏ hơn 400px thì ẩn button
    myBtn.style.display = "none";
  }
}
//gán sự kiện click cho button
myBtn.addEventListener("click", function () {
  //Nếu button được click thì nhảy về đầu trang
  window.scrollTo({ top: 0, behavior: "smooth" });
});
function setSkillbarValue(val) {
  const skillBar = document.querySelector(".skill-progress");
  skillBar.style.width = val + "%";
}
