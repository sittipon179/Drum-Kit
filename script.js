// รอจนกว่า DOM จะโหลดเสร็จ
document.addEventListener("DOMContentLoaded", function () {
    // เลือกปุ่มกลองทั้งหมด
    const drumButtons = document.querySelectorAll(".drum");
  
    // เพิ่ม Event Listener สำหรับการคลิกปุ่ม
    drumButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const buttonInnerHTML = this.innerHTML; // รับตัวอักษรของปุ่มที่คลิก
        playSound(buttonInnerHTML); // เล่นเสียง
        buttonAnimation(buttonInnerHTML); // เพิ่มเอฟเฟกต์ Animation
      });
    });
  
    // เพิ่ม Event Listener สำหรับการกดแป้นพิมพ์
    document.addEventListener("keydown", function (event) {
      playSound(event.key); // เล่นเสียงเมื่อแป้นพิมพ์ถูกกด
      buttonAnimation(event.key); // เพิ่มเอฟเฟกต์ Animation
    });
  
    // ฟังก์ชันสำหรับเล่นเสียง
    function playSound(key) {
      let audio;
      switch (key) {
        case "w":
          audio = new Audio("sounds/tom-1.mp3");
          break;
        case "a":
          audio = new Audio("sounds/tom-2.mp3");
          break;
        case "s":
          audio = new Audio("sounds/tom-3.mp3");
          break;
        case "d":
          audio = new Audio("sounds/tom-4.mp3");
          break;
        case "j":
          audio = new Audio("sounds/crash.mp3");
          break;
        case "k":
          audio = new Audio("sounds/kick-bass.mp3");
          break;
        case "l":
          audio = new Audio("sounds/snare.mp3");
          break;
        default:
          console.error("ไม่มีเสียงสำหรับปุ่มนี้: " + key);
          return; // หยุดทำงานถ้าปุ่มไม่ถูกต้อง
      }
      audio.play().catch((err) => console.error("Error playing audio:", err));
    }
  
    // ฟังก์ชันเพิ่ม Animation เมื่อปุ่มถูกกด
    function buttonAnimation(key) {
      const activeButton = document.querySelector("." + key); // ค้นหาปุ่มที่กด
      if (activeButton) {
        activeButton.classList.add("pressed"); // เพิ่มคลาสสำหรับ Animation
        setTimeout(() => {
          activeButton.classList.remove("pressed"); // ลบคลาสหลังจาก 100ms
        }, 100);
      }
    }
  });
  