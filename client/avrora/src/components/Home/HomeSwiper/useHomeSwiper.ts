import swiperJson from "../../../../public/home/swiperData/homeSwiper.json";

export const useHomeSwiper = () => {

    const swiperData = swiperJson[0].data
    const isData = Array.isArray(swiperData) && swiperData?.length
    const photoLocation = '/home/swiperData/img/'



    return {
        isData,
        swiperData,
        photoLocation
    }
}
