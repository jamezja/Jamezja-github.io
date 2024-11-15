document.addEventListener("DOMContentLoaded", function() {
    const showMessageBtn = document.getElementById("showMessageBtn");
    showMessageBtn.addEventListener("click", showBirthdayMessage);
});

function showBirthdayMessage() {
    // ซ่อนข้อความหลักและปุ่มเมื่อกดปุ่ม
    document.getElementById("mainTitle").classList.add("hidden");  
    document.getElementById("welcomeMessage").classList.add("hidden");
    document.getElementById("showMessageBtn").classList.add("hidden"); // ซ่อนปุ่ม

    // แสดง birthday message
    const birthdayMessage = document.getElementById("birthdayMessage");
    birthdayMessage.classList.remove("hidden"); // แสดงข้อความอวยพร
    birthdayMessage.classList.add("show"); // ใช้ class 'show'

    // เรียกใช้ฟังก์ชันสุ่มรูปภาพ
    displayRandomImage();

    // แสดงข้อความทีละตัว
    displayMessagesSlowly();

    // แสดง floating-assets
    document.querySelector(".floating-assets").classList.remove("hidden"); // แสดง asset ที่ลอย
}

function displayRandomImage() {
    const images = [
        'images/1.png',
        'images/7.png',
        'images/3.png',
        'images/4.png',
        'images/5.png',
        'images/6.png'
    ];

    // สุ่มเลือกภาพ
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    // แสดงภาพ
    document.getElementById("randomImage").src = randomImage;
}

function displayMessagesSlowly() {
    const messages = [
        "𖠜",
        "⛫",
        "☐",
        "☐",
        "สุขสันต์วันเกิดนะครับคุณเจนนี่",
        "วันเกิดครบรอบ 26 ปี โตขึ้นอีกปีแล้วนะครับ",
        "ขอให้มีความสุข สุขภาพแข็งแรงไม่เป็นหวัดทุกๆเช้า",
        "ขอให้สิ่งที่คิดนั้นประสบความสำเร็จอย่างที่ตั้งใจไว้",
        "ขอให้โลกนี้ใจดีและอ่อนโยนกับเธอ โชคดีในทุกๆวัน",
        "ขอให้เธอน่ารักกับเค้าแบบนี้ไปตลอดในทุกๆวันเลยนะ",
        "อยู่เติบโตไปด้วยกันนานๆ เชื่อฟังเค้าในบางเรื่องด้วยนะ",
        "อาจมีทะเลาะกันบ้างแต่อยากบอกเธอว่า รักเธอมากๆนะ"
    ];

    const messageElement = document.getElementById("messageLine");
    let currentMessageIndex = 0; // ตัวนับข้อความ
    let currentCharIndex = 0; // ตัวนับตัวอักษร

    function displayNextCharacter() {
         if (currentCharIndex < messages[currentMessageIndex].length) {
             messageElement.innerHTML += messages[currentMessageIndex].charAt(currentCharIndex);
             currentCharIndex++;
             setTimeout(displayNextCharacter, 10); // หน่วงเวลา 100 มิลลิวินาทีระหว่างตัวอักษร
         } else {
             currentMessageIndex++;
             currentCharIndex = 0;

             if (currentMessageIndex < messages.length) {
                 setTimeout(() => {
                     messageElement.innerHTML += "<br>"; // ขึ้นบรรทัดใหม่ก่อนแสดงข้อความถัดไป
                     displayNextCharacter();
                 }, 500); // หน่วงเวลาที่จะเริ่มข้อความถัดไป
             } else {
                document.getElementById("nextButton").style.display = "block"; // แสดงปุ่มถัดไปเมื่อแสดงข้อความสุดท้าย
                 document.getElementById("finalMessage").classList.remove("hidden"); // แสดงข้อความสุดท้าย
             }
         }
    }

    messageElement.classList.remove("hidden"); // แสดงบรรทัดข้อความ
    displayNextCharacter(); // เริ่มแสดงข้อความ
}

function showMemories() {
    // ซ่อน birthday message
    const birthdayMessage = document.getElementById("birthdayMessage");
    birthdayMessage.classList.add("hidden");
    birthdayMessage.classList.remove("show"); // ลบ class 'show'

    // แสดง memories-container
    const memories = document.getElementById("memories");
    memories.classList.remove("hidden");
    memories.classList.add("show");

    // ซ่อน floating-assets
    const floatingAssets = document.querySelector('.floating-assets');
    floatingAssets.classList.add('hidden');
}


function endMessage() {
    // ซ่อนความทรงจำ
    const memories = document.getElementById("memories");
    memories.classList.add("hidden");
    memories.classList.remove("show"); // ลบ class 'show'

    const endMessage = document.getElementById("endMessage");
    endMessage.classList.remove("hidden");
    endMessage.classList.add("show");
}


let currentImageIndex = 0;

function showNextImage() {
    const images = document.querySelectorAll(".image-stack img");

    // ซ่อนภาพปัจจุบัน
    images[currentImageIndex].classList.add("hidden");
    images[currentImageIndex].classList.remove("active");

    // แสดงภาพถัดไป
    currentImageIndex = (currentImageIndex + 1) % images.length; // วนลูปรูปภาพ
    images[currentImageIndex].classList.remove("hidden");
    images[currentImageIndex].classList.add("active");
}












