let add_btn = document.querySelector(".add_btn");
let content = document.getElementById("content");
let fileInput = document.getElementById("fileInput");
let selectedImage = null; // 현재 선택된 이미지를 저장하는 변수
let isEditMode = false; // 수정 모드 여부를 나타내는 변수

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
                // 새 이미지 요소 생성
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;

                // 클릭한 이미지를 수정 가능하도록 설정
                imgElement.addEventListener('click', () => {
                    selectedImage = imgElement; // 현재 선택된 이미지로 설정
                    isEditMode = true; // 수정 모드로 변경
                    fileInput.click(); // 파일 업로드 입력 다시 클릭하여 수정할 수 있도록 함
                });

                // span 요소 생성
                const newSpan = document.createElement('span');
                newSpan.appendChild(imgElement);

                // content에 새로운 span 요소 추가
                content.appendChild(newSpan);
            } else {
                // 수정 모드일 경우, 선택한 이미지를 변경
                selectedImage.src = imageUrl;
                isEditMode = false; // 수정 모드 종료
            }
        };
        reader.readAsDataURL(selectedFile);
    }
});
