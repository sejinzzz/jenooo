let random_array  = []; // 랜덤을 뽑힌 이미지 배열
let temp = []; // 내가 선택된 사진 배열들
let images = [
    { name : "쮜", fileName: "nct1.jpg"},
    { name : "젠", fileName: "nct2.jpg"},
    { name : "젠", fileName: "nct3.jpg"},
    { name : "젠", fileName: "nct4.jpg"},
    { name : "쮜", fileName: "nct5.jpg"},
    { name : "젠", fileName: "nct6.jpg"},
    { name : "젠", fileName: "nct7.jpg"},
    { name : "젠", fileName: "nct8.jpg"},
    { name : "젠", fileName: "nct9.jpg"},
    { name : "젠", fileName: "nct10.jpg"},

    { name : "젠", fileName: "nct11.jpg"},
    { name : "젠", fileName: "nct12.jpg"},
    { name : "쮜", fileName: "nct13.jpg"},
    { name : "해", fileName: "nct14.jpg"},
    { name : "정", fileName: "nct15.jpg"},
    { name : "정", fileName: "nct16.jpg"},
    { name : "해", fileName: "nct17.jpg"},
    { name : "젠", fileName: "nct18.jpg"},
    { name : "맠", fileName: "nct19.jpg"},
    { name : "잼", fileName: "nct20.jpg"},

    { name : "쮜", fileName: "nct21.png"},
    { name : "잼", fileName: "nct22.jpg"},
    { name : "정", fileName: "nct23.jpg"},
    { name : "해", fileName: "nct24.jpg"},
    { name : "해", fileName: "nct25.jpg"},
    { name : "쮜", fileName: "nct26.jpg"},
    { name : "맠", fileName: "nct27.jpg"},
    { name : "잼", fileName: "nct28.jpg"},
    { name : "젠", fileName: "nct29.jpg"},
    { name : "젠", fileName: "nct30.jpg"},

    { name : "해", fileName: "nct31.jpg"},
    { name : "런", fileName: "nct32.jpg"},
    { name : "잼", fileName: "nct33.jpg"},
    { name : "잼", fileName: "nct34.jpg"},
    { name : "잼", fileName: "nct35.jpg"},
    { name : "맠", fileName: "nct36.jpg"},
    { name : "맠", fileName: "nct37.jpg"},
    { name : "맠", fileName: "nct38.jpg"},
    { name : "해", fileName: "nct39.jpg"},
    { name : "잼", fileName: "nct40.jpg"},
    
    { name : "쮜", fileName: "nct41.jpg"},
    { name : "쮜", fileName: "nct42.jpg"},
    { name : "잼", fileName: "nct43.jpg"},
    { name : "맠", fileName: "nct44.jpg"},
    { name : "맠", fileName: "nct45.jpg"},
    { name : "맠", fileName: "nct46.jpg"},
    { name : "맠", fileName: "nct47.jpg"},
    { name : "맠", fileName: "nct48.jpg"},
    { name : "정", fileName: "nct49.jpg"},
    { name : "잼", fileName: "nct50.jpg"},

    { name : "쮜", fileName: "nct51.jpg"},
    { name : "런", fileName: "nct52.jpg"},
    { name : "런", fileName: "nct53.jpg"},
    { name : "잼", fileName: "nct54.jpg"},
    { name : "해", fileName: "nct55.jpg"},
    { name : "런", fileName: "nct56.jpg"},
    { name : "해", fileName: "nct57.jpg"},
    { name : "런", fileName: "nct58.jpg"},
    { name : "맠", fileName: "nct59.jpg"},
    { name : "잼", fileName: "nct60.jpg"},

    { name : "쮜", fileName: "nct61.jpg"},
    { name : "젠", fileName: "nct62.jpg"},
    { name : "해", fileName: "nct63.jpg"},
    { name : "잼", fileName: "nct64.jpg"},
    { name : "해", fileName: "nct65.jpg"},
    { name : "젠", fileName: "nct66.jpg"},
    { name : "해", fileName: "nct67.jpg"}

];
while (random_array.length < 16) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images.splice(randomIndex, 1)[0];
    if (!random_array.includes(randomImage)) {
        random_array.push(randomImage);
    }
}

function img_print() {
    $('.first_img').html(`<img src="images/${random_array[0].fileName}">`);
    $('.sec_img').html(`<img src="images/${random_array[1].fileName}">`);
}
img_print();

function check(select) {
    temp.push(random_array[select]);
    random_array.splice(0, 2);
    if (random_array.length == 0) {
        random_array = temp;
        if (random_array.length == 8) {
            $(".score").text("8강");
        } else if (random_array.length == 4) {
            $(".score").text("4강");
        } else if (random_array.length == 2) {
            $(".score").text("2강");
        } else if (random_array.length == 1) {
            $("section").html(`
                <div class="winner">
                    <img src="images/${temp[0].fileName}" alt="우승자" />
                </div>
                <div class="winner_info">
                    <p><span>${temp[0].name}프</span> 이시군요 ^^.b 따봉</p>
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