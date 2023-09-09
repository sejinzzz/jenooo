let random_array  = []; // 랜덤을 뽑힌 이미지 배열
let temp = []; // 내가 선택된 사진 배열들
let images = [
    "nct1.jpg",
    "nct2.jpg",
    "nct3.jpg",
    "nct4.jpg",
    "nct5.jpg",
    "nct6.jpg",
    "nct7.jpg",
    "nct8.jpg",
    "nct9.jpg",
    "nct10.jpg",
    "nct11.jpg",
    "nct12.jpg",
    "nct13.jpg",
    "nct14.jpg",
    "nct15.jpg",
    "nct16.jpg",
    "nct17.jpg",
    "nct18.jpg",
    "nct19.jpg",
    "nct20.jpg",
    "nct21.png",
    "nct22.jpg",
    "nct23.jpg",
    "nct24.jpg",
    "nct25.jpg",
    "nct26.jpg",
    "nct27.jpg",
    "nct28.jpg",
    "nct29.jpg",
    "nct30.jpg",
    "nct31.jpg",
    "nct32.jpg",
    "nct33.jpg",
    "nct34.jpg",
    "nct35.jpg",
    "nct36.jpg",
    "nct37.jpg",
    "nct38.jpg",
    "nct39.jpg",
    "nct40.jpg"
];
while (random_array.length < 16) {
    const randomIndex = Math.floor(Math.random() * images.length); // 20개 사진중 16개를 넣어줌
    const randomImage = images.splice(randomIndex, 1)[0]; // 사진 배열에서 선택된 하나의 사진이 저장됨
    if (random_array.indexOf(randomImage) === -1) {
        random_array.push(randomImage); 
    }
}

// 화면에 출력하기
function img_print()
{
    $('.first_img').html(`<img src="images/${random_array[0]}">`);
    $('.sec_img').html(`<img src="images/${random_array[1]}">`);
}
img_print();

// 사진 선택하기
function check(select)
{
    temp.push(random_array[select]);
    random_array.splice(0, 2);
    if(random_array.length == 0){
        //선택을 다시 할 수 있게 세팅을 해준다.
        random_array = temp;
        //랜덤 음식이 8개 남을 경우 문구를 바꾼다.
        if(random_array.length == 8){
            $(".score").text("8강");
        }  
        else if(random_array.length == 4){
            $(".score").text("4강");
        }
        else if(random_array.length == 2){
            $(".score").text("2강");
        }
        else if(random_array.length == 1){
            console.log(temp);
            $("section").html(`
                <div class="winner">
                    <img src="images/${temp[0]}" alt="우승자" />
                </div>
                <div class="winner_info">
                    <p>${temp}아~ ^^.❤</p>
                </div>
            `);
        }
        //선택한 값을 초기화해준다.
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