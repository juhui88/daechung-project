export const kakaoInit = () => {
    const kakao = (window).Kakao;
    if(!kakao.isInitialized()) {
        kakao.init(process.env.NEXT_PUBLIC_CLIENT_ID);
    }

    return kakao;
}