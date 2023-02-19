export const kakaoInit = () => {
    const kakao = (window).Kakao;
    if(!kakao.isInitialized()) {
        kakao.init("1569518d3084739420e074d8befe8ec2");
    }

    return kakao;
}