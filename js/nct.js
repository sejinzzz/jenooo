let random_array  = []; // 랜덤을 뽑힌 이미지 배열
let temp = []; // 내가 선택된 사진 배열들
let images = [
    { name : "도영", fileName: "도영.jpg"},
    { name : "런쥔", fileName: "런쥔.jpg"},
    { name : "마크", fileName: "마크.jpg"},
    { name : "샤오쥔", fileName: "샤오쥔.jpg"},
    { name : "양양", fileName: "양양.jpg"},
    { name : "윈윈", fileName: "윈윈.jpg"},
    { name : "유타", fileName: "유타.jpg"},
    { name : "재민", fileName: "재민.jpg"},
    { name : "재현", fileName: "재현.jpg"},
    { name : "쟈니", fileName: "쟈니.jpg"},

    { name : "정우", fileName: "정우.jpg"},
    { name : "제노", fileName: "제노.jpg"},
    { name : "지성", fileName: "지성.jpg"},
    { name : "천러", fileName: "천러.jpg"},
    { name : "쿤", fileName: "쿤.jpg"},
    { name : "태용", fileName: "태용.jpg"},
    { name : "태일", fileName: "태일.jpg"},
    { name : "텐", fileName: "텐.jpg"},
    { name : "해찬", fileName: "해찬.jpg"},
    { name : "헨드리", fileName: "헨드리.jpg"}
];
while (random_array.length < 20) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images.splice(randomIndex, 1)[0];
    if (!random_array.includes(randomImage)) {
        random_array.push(randomImage);
    }
}

function img_print() {
    $('.first_img').html(`<img src="nct/${random_array[0].fileName}">`);
    $('.sec_img').html(`<img src="nct/${random_array[1].fileName}">`);
}
img_print();

function check(select) {
    temp.push(random_array[select]);
    random_array.splice(0, 2);
    if (random_array.length == 0) {
        random_array = temp;
        if (random_array.length == 1) {
            $("section").html(`
                <div class="winner">
                    <img src="nct/${temp[0].fileName}" alt="우승자" />
                </div>
                <div class="winner_info">
                    <p><span>"${temp[0].name}"</span>맘에 드시는군요 ^^.b 따봉</p>
                </div>
            `);
        }
        temp = [];
    }
    img_print();
}

// random_array: 랜덤으로 선택된 이미지를 저장하는 배열입니다.
// temp: 사용자가 선택한 이미지를 저장하는 배열입니다.
// images: 가능한 이미지 목록이 있는 배열입니다.
// while 루프: random_array 배열이 16개의 이미지로 채워질 때까지 반복됩니다. 루프 안에서 랜덤하게 이미지를 선택하고, 중복된 이미지를 피하기 위해 이미지가 random_array 배열에 없는 경우에만 추가합니다.
// img_print 함수: random_array 배열의 첫 번째와 두 번째 이미지를 각각 .first_img와 .sec_img 클래스를 가진 요소에 출력합니다.
// check 함수: 사용자가 이미지를 선택하면 호출되며, 선택된 이미지를 temp 배열에 추가하고 random_array 배열에서 제거합니다. random_array 배열의 길이가 0이 되면, 토너먼트가 진행되고, 남은 이미지 수에 따라 .score 클래스를 가진 요소의 텍스트를 업데이트합니다. 마지막으로, temp 배열에 남은 이미지가 1개 남게 되면, 최종 우승자 정보와 이미지를 출력합니다.
// 코드의 마지막 부분에서 $("section").html()를 사용하여 최종 우승자 정보와 이미지를 출력하고 있습니다. 이 코드는 temp 배열의 내용과 이미지를 표시하는 HTML을 동적으로 생성합니다. 최종 우승자의 이미지 URL은 temp[0]에 있으며, 이를 이용하여 이미지를 출력하고, 우승자의 이름은 temp 배열의 내용을 사용하여 출력합니다.

// 이렇게 코드를 통해 토너먼트가 진행되고 최종 우승자가 출력됩니다.