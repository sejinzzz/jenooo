let add_btn = document.querySelector(".add_btn");
let content = document.getElementById("content");
let fileInput = document.getElementById("fileInput");
let selectedImage = null; // 현재 선택된 이미지를 저장하는 변수
let isEditMode = false; // 수정 모드 여부를 나타내는 변수
let images = JSON.parse(localStorage.getItem('images')) || []; // 이미지 데이터를 저장하는 배열

// 페이지 로드 시 로컬 스토리지에서 이미지 데이터를 가져와서 출력
images.forEach((imageUrl) => {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;

    const newSpan = document.createElement('span');
    newSpan.appendChild(imgElement);

    imgElement.addEventListener('click', () => {
        selectedImage = imgElement;
        isEditMode = true;
        fileInput.click();
    });

    content.appendChild(newSpan);
});

add_btn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;

            if (!isEditMode) {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;

                imgElement.addEventListener('click', () => {
                    selectedImage = imgElement;
                    isEditMode = true;
                    fileInput.click();
                });

                const newSpan = document.createElement('span');
                newSpan.appendChild(imgElement);

                content.appendChild(newSpan);

                // 이미지 데이터를 배열에 저장하고 중복된 이미지를 처리하지 않음
                images.push(imageUrl);
                localStorage.setItem('images', JSON.stringify(images));
            } else {
                // 수정된 이미지의 URL을 배열에서 업데이트
                const selectedIndex = images.indexOf(selectedImage.src);
                if (selectedIndex !== -1) {
                    images[selectedIndex] = imageUrl;
                    localStorage.setItem('images', JSON.stringify(images));
                    selectedImage.src = imageUrl; // 이미지 업데이트
                    isEditMode = false;
                }
            }
        };
        reader.readAsDataURL(selectedFile);
    }
});

// RESET 버튼을 눌렀을 때 로컬 스토리지 초기화
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {
    localStorage.clear(); // 로컬 스토리지 초기화
    images = []; // 이미지 배열 초기화
    content.innerHTML = ''; // 내용 초기화
    memories.textContent = 'MEMORY : 5MB'; // 메모리 정보 초기화
});


// 로컬 스토리지
const storageLimit = (function() {
    try {
        if ('localStorage' in window && window['localStorage'] !== null) {
            const testKey = 'storageTest';
            localStorage.setItem(testKey, '1');
            localStorage.removeItem(testKey);
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
})();

if (typeof Storage !== 'undefined') { // 로컬 스토리지를 지원하는지 확인
    const availableSpace = 5 * 1024 * 1024; // 5MB로 가정
    const usedSpace = JSON.stringify(localStorage).length;
    const remainingSpaceInBytes = availableSpace - usedSpace;
    const remainingSpaceInMegabytes = Math.round(remainingSpaceInBytes / (1024 * 1024)); // 바이트를 메가바이트로 변환 및 반올림
    const memories = document.querySelector(".memories");

    memories.textContent = 'MEMORY : ' + remainingSpaceInMegabytes + 'MB';
} else {
    console.log('로컬 스토리지를 지원하지 않습니다.');
}


