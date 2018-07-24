import {
  RECEIVE_NAVCATES, RECEIVE_FOCUSLISTS, RECEIVE_TAGLISTS, RECEIVE_FIRSTNEWS, RECEIVE_GOODSELECTEDS,
  RECEIVE_SPECIALSELECTEDS, RECEIVE_GOODJUJIAS,

  RECEIVE_SUMMERGIRLS, RECEIVE_SHIWUCAROUSELS, RECEIVE_RECOMMENDS, RECEIVE_TENTIMECAROUSELS, RECEIVE_YANXUANZHENPS,
  RECEIVE_YANXUANLOOKS, RECEIVE_MORES,

  RECEIVE_CLASSIFYS,

}from './mutation_types'

import {
  reqNavCateList, reqFocusList, reqTagList, reqFirstNew, reqGoodSelected, reqSpecialSelected, reqGoodJuJia,
  reqSummerGirl, reqShiWuCarousel, reqRecommend, reqTenTimeCarousel, reqYanXuanZhenP, reqYanXuanLook, reqMore,
  reqClassify,

}from '../api'

export default {
  async getNavCateList({commit},callback){
    const result = await reqNavCateList();
    if (result.code === 0) {
      const navCates = result.data;
      commit(RECEIVE_NAVCATES, {navCates});
      callback && callback()
    }
  },
  async getFocusList({commit},callback){
    const result =await reqFocusList();
    if(result.code===0){
      const focusLists = result.data;
      commit(RECEIVE_FOCUSLISTS,{focusLists});
      callback && callback()
    }
  },
  async getTagList({commit},callback){
    const result =await reqTagList();
    if(result.code===0){
      const tagLists = result.data;
      commit(RECEIVE_TAGLISTS,{tagLists});
      callback && callback()
    }
  },
  async getFirstNew ({commit},callback){
    const result =await reqFirstNew();
    if(result.code===0){
      const firstNews = result.data;
      commit(RECEIVE_FIRSTNEWS,{firstNews});
      callback && callback()
    }
  },
  async getGoodSelected ({commit},callback){
    const result =await reqGoodSelected();
    if(result.code===0){
      const goodSelecteds = result.data;
      commit(RECEIVE_GOODSELECTEDS,{goodSelecteds});
      callback && callback()
    }
  },
  async getSpecialSelected ({commit},callback){
    const result =await reqSpecialSelected();
    if(result.code===0){
      const specialSelecteds = result.data;
      commit(RECEIVE_SPECIALSELECTEDS,{specialSelecteds});
      callback && callback()
    }
  },
  async getGoodJuJia ({commit},callback){
    const result =await reqGoodJuJia();
    if(result.code===0){
      const goodJuJias = result.data;
      commit(RECEIVE_GOODJUJIAS,{goodJuJias});
      callback && callback()
    }
  },




  async getSummerGirl ({commit},callback){
    const result =await reqSummerGirl();
    if(result.code===0){
      const summerGirls = result.data;
      commit(RECEIVE_SUMMERGIRLS,{summerGirls});
      callback && callback()
    }
  },
  async getShiWuCarousel ({commit},callback){
    const result =await reqShiWuCarousel();
    if(result.code===0){
      const shiWuCarousels = result.data;
      commit(RECEIVE_SHIWUCAROUSELS,{shiWuCarousels});
      callback && callback()
    }
  },
  async getRecommend ({commit},callback){
    const result =await reqRecommend();
    if(result.code===0){
      const recommends = result.data;
      commit(RECEIVE_RECOMMENDS,{recommends});
      callback && callback()
    }
  },
  async getTenTimeCarousel ({commit},callback){
    const result =await reqTenTimeCarousel();
    if(result.code===0){
      const tenTimeCarousels = result.data;
      commit(RECEIVE_TENTIMECAROUSELS,{tenTimeCarousels});
      callback && callback()
    }
  },  //样式有点小问题
  async getYanXuanZhenP ({commit},callback){
    const result =await reqYanXuanZhenP();
    if(result.code===0){
      const yanXuanZhenPs = result.data;
      commit(RECEIVE_YANXUANZHENPS,{yanXuanZhenPs});
      callback && callback()
    }
  },
  async getYanXuanLook ({commit},callback){
    const result =await reqYanXuanLook();
    if(result.code===0){
      const yanXuanLooks = result.data;
      commit(RECEIVE_YANXUANLOOKS,{yanXuanLooks});
      callback && callback()
    }
  },
  async getMore({commit},callback){
    const result =await reqMore();
    if(result.code===0){
      const mores = result.data;
      commit(RECEIVE_MORES,{mores});
      callback && callback()
    }
  },

  async getClassify ({commit},callback){
  const result =await reqClassify();
  if(result.code===0){
    const classifys = result.data;
    commit(RECEIVE_CLASSIFYS,{classifys});
    callback && callback()
  }
}
}
