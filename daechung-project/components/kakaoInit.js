export const kakaoInit = () => {
    const kakao = (window).Kakao;
    if(!kakao.isInitialized()) {
        kakao.init(process.env.KAKAO_KEY);
    }

    return kakao;
}