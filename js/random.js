const movieAreaDizm = document.getElementById('movieAreaDizm');
const moviesDizm = ['https://www.youtube.com/embed/cJkOxBfJOwI', 'https://www.youtube.com/embed/7_fZ-S18L0c', 'https://www.youtube.com/embed/3Q5MuXh2Ah8', 'https://www.youtube.com/embed/uGMR2Loto6c', 'https://www.youtube.com/embed/eIJ5Tugo2Vk', 'https://www.youtube.com/embed/XS1A0u2iEaY', 'https://www.youtube.com/embed/LziPlKsSG2c', 'https://www.youtube.com/embed/yU0wuHzHACI', 'https://www.youtube.com/embed/tBewSZlQQoQ', 'https://www.youtube.com/embed/0f0jZhSObSs','https://www.youtube.com/embed/Rck5bgqtJ_E', 'https://www.youtube.com/embed/aWUmruZosOU', 'https://www.youtube.com/embed/zECI7apfL3k', 'https://www.youtube.com/embed/CeX80I45UcM', 'https://www.youtube.com/embed/bh_wciUi318', 'https://www.youtube.com/embed/nEb83-QO70o', 'https://www.youtube.com/embed/gI2jRtVe-Gc', 'https://www.youtube.com/embed/-CJeT-MLiA4', 'https://www.youtube.com/embed/ZLLJVKM-7lg', 'https://www.youtube.com/embed/LGneUNIn8Eg', 'https://www.youtube.com/embed/bHYNKKllAV4', 'https://www.youtube.com/embed/uBfcrqm-NL0', 'https://www.youtube.com/embed/HoqBA1kC_Eo', 'https://www.youtube.com/embed/Bf18uFKDe3U', 'https://www.youtube.com/embed/7WKARj1slPs', 'https://www.youtube.com/embed/Ib_WSCtmduQ', 'https://www.youtube.com/embed/j83sSAQKkKA', 'https://www.youtube.com/embed/aBr1fhMlrV0', 'https://www.youtube.com/embed/ZMpTHtiI17c', 'https://www.youtube.com/embed/gHCJl6rkflU', 'https://www.youtube.com/embed/qzvP4gC6JXw', 'https://www.youtube.com/embed/1X3ImV0N6F4', 'https://www.youtube.com/embed/rdX181BpSRg', 'https://www.youtube.com/embed/Y806S0N05wk', 'https://www.youtube.com/embed/qSkoAn4kQ98', 'https://www.youtube.com/embed/a1W8m_up-2Y', 'https://www.youtube.com/embed/BY54NgpgcZE', 'https://www.youtube.com/embed/EhxV394iY4k', 'https://www.youtube.com/embed/cKhpZTXKrzI', 'https://www.youtube.com/embed/-eEMQgxk9K0', 'https://www.youtube.com/embed/hZ-kSFZKzxo', 'https://www.youtube.com/embed/DXNYey9jJjk', 'https://www.youtube.com/embed/xATujJoxqik', 'https://www.youtube.com/embed/uy03TfvRHwY', 'https://www.youtube.com/embed/tMGeFC77cjA', 'https://www.youtube.com/embed/afQi74I4l24', 'https://www.youtube.com/embed/U2K3exWCJJI', 'https://www.youtube.com/embed/PDhwiRJCyw4', 'https://www.youtube.com/embed/1FwmVi93H8Q', 'https://www.youtube.com/embed/cHAaq0ee52c', 'https://www.youtube.com/embed/Aj4MkjgWSLU', 'https://www.youtube.com/embed/Uj4zCei__wQ', 'https://www.youtube.com/embed/r03N_rIT7HU', 'https://www.youtube.com/embed/Mzj1MP_W5v0', 'https://www.youtube.com/embed/KZYWEqk4DmA', 'https://www.youtube.com/embed/ocmgm4KMRHU', 'https://www.youtube.com/embed/ehBa-DrD94Q', 'https://www.youtube.com/embed/QPFtKyWQMFk', 'https://www.youtube.com/embed/XUmlexOAIxM', 'https://www.youtube.com/embed/WlOsy4muxIk', 'https://www.youtube.com/embed/BcAQ3lUR35Q', 'https://www.youtube.com/embed/4c9zCdVdO0I'];

const movieNoDizm = Math.floor( Math.random() * moviesDizm.length)
movieAreaDizm.src = moviesDizm[movieNoDizm];



const movieAreaPapav = document.getElementById('movieAreaPapav');
const moviesPapav = ['https://www.youtube.com/embed/ZP2UYW8sc_4', 'https://www.youtube.com/embed/mWy_CwJhU2E', 'https://www.youtube.com/embed/ZoAWee-GfJQ', 'https://www.youtube.com/embed/j1sa0QFp2uU', 'https://www.youtube.com/embed/fyRbyEDtk0M', 'https://www.youtube.com/embed/CciDW0kwmg8', 'https://www.youtube.com/embed/Axy9GuMFC0Y', 'https://www.youtube.com/embed/qwo2nO8Ds6g', 'https://www.youtube.com/embed/tqDDO-5dYqU', 'https://www.youtube.com/embed/8_Y-FWDwkQM', 'https://www.youtube.com/embed/3r-tvIgeyvY', 'https://www.youtube.com/embed/xFuUPRdCCQw', 'https://www.youtube.com/embed/wu2YYk1Yhn0', 'https://www.youtube.com/embed/wB6pTo4aE_c', 'https://www.youtube.com/embed/y7mGvnBCUJQ', 'https://www.youtube.com/embed/RnAxLAmN9oo', 'https://www.youtube.com/embed/Y08ALqVz4V8', 'https://www.youtube.com/embed/FRXiuBkl2qQ', 'https://www.youtube.com/embed/EcrEWKMfC5E', 'https://www.youtube.com/embed/MAA20IPFRaY', 'https://www.youtube.com/embed/g15_WMU_Vno', 'https://www.youtube.com/embed/_g0cmUp0LiM', 'https://www.youtube.com/embed/7JGxrJCtF4Y', 'https://www.youtube.com/embed/qd--gv3BO8w', 'https://www.youtube.com/embed/SLd13VUaQ9o', 'https://www.youtube.com/embed/OiRI4mHgIjU', 'https://www.youtube.com/embed/Ixazb9EsESI', 'https://www.youtube.com/embed/tM3QNoSK0Pc', 'https://www.youtube.com/embed/jxspUWFVI4Q', 'https://www.youtube.com/embed/-uL-1eRBOwQ', 'https://www.youtube.com/embed/e4eG3EPl4ck', 'https://www.youtube.com/embed/ZBa1rLA3J3Y', 'https://www.youtube.com/embed/cHAaq0ee52c', 'https://www.youtube.com/embed/nVHZ9AuZXyk', 'https://www.youtube.com/embed/PawQMQ1jc0Q', 'https://www.youtube.com/embed/D9A-X8DcWD0', 'https://www.youtube.com/embed/OM7v8eikf7g', 'https://www.youtube.com/embed/Az-weslGJK4', 'https://www.youtube.com/embed/ncuhJuNUMIk', 'https://www.youtube.com/embed/uM0otWl-rlA', 'https://www.youtube.com/embed/Nxz-raTUeJo', 'https://www.youtube.com/embed/xNNqTYtVCT8', 'https://www.youtube.com/embed/6FZO4H1gjaU', 'https://www.youtube.com/embed/-OiFI3nyhUY', 'https://www.youtube.com/embed/MCZvbfcsANo', 'https://www.youtube.com/embed/MLPX93YXa-o', 'https://www.youtube.com/embed/F_sl5f4lsaE', 'https://www.youtube.com/embed/8AUDNPlau_Q', 'https://www.youtube.com/embed/ry12B1PiGtQ', 'https://www.youtube.com/embed/oLu5zvgxCq0', 'https://www.youtube.com/embed/Waus3rVWdU4', 'https://www.youtube.com/embed/MxNRIJa2VjU'];

const movieNoPapav = Math.floor( Math.random() * moviesPapav.length)
movieAreaPapav.src = moviesPapav[movieNoPapav];



const movieAreaMuchu = document.getElementById('movieAreaMuchu');
const moviesMuchu = ['https://www.youtube.com/embed/yXY4yJNPVhI', 'https://www.youtube.com/embed/DJi6TvlQ7js', 'https://www.youtube.com/embed/keBGUprCsOQ', 'https://www.youtube.com/embed/VMZ50fI-rWs', 'https://www.youtube.com/embed/ZqUcYu0PgF4', 'https://www.youtube.com/embed/VsDHphApkDw', 'https://www.youtube.com/watch?v=48K1MbWtpH4', 'https://www.youtube.com/embed/2v95O14BrSw', 'https://www.youtube.com/embed/PYFzegrqxXY', 'https://www.youtube.com/embed/8TgoW0dc8qw', 'https://www.youtube.com/embed/l8S_W03ASiA', 'https://www.youtube.com/embed/WcqsrX6TF2o', 'https://www.youtube.com/embed/4X6fk6jLN9U', 'https://www.youtube.com/embed/IAyvMRCRkFE', 'https://www.youtube.com/embed/bZJFX0XAV2A', 'https://www.youtube.com/embed/Q_7diYSJWJs', 'https://www.youtube.com/embed/B_Afo0w-ASw', 'https://www.youtube.com/embed/E50IBFcFBqQ', 'https://www.youtube.com/embed/4iV6TvqIz6Q', 'https://www.youtube.com/embed/9OiHMtNYido', 'https://www.youtube.com/embed/D8scMnE3J3s', 'https://www.youtube.com/embed/wE10KHPMGAQ', 'https://www.youtube.com/embed/f-7UshmZ69s', 'https://www.youtube.com/embed/1XzVi-O_hG8', 'https://www.youtube.com/embed/-zLVkMHfvsk', 'https://www.youtube.com/embed/mFZUlA8bZAo', 'https://www.youtube.com/embed/-0vFKYrVRA4', 'https://www.youtube.com/embed/cUDBhrvckpE', 'https://www.youtube.com/embed/CLbXboZtqh0', 'https://www.youtube.com/embed/PdtjSDgvDlQ', 'https://www.youtube.com/embed/Ol9PM_RYGiw', 'https://www.youtube.com/embed/0EzIbE3YTFg', 'https://www.youtube.com/embed/wIHYr-GMhVM', 'https://www.youtube.com/embed/8PIv2G8PbxM', 'https://www.youtube.com/embed/FSAWNLqSE6Q', 'https://www.youtube.com/embed/GnLhj7yMICQ', 'https://www.youtube.com/embed/WYZNlfpBpsw', 'https://www.youtube.com/embed/CPOWQNYthXo', 'https://www.youtube.com/embed/mzzonppkJ90', 'https://www.youtube.com/embed/51hO4oDReBU', 'https://www.youtube.com/watch?v=gOKx4s3iYZE', 'https://www.youtube.com/embed/V_CDTq1Dtw4', 'https://www.youtube.com/embed/gJTVBTekXpc'];

const movieNoMuchu = Math.floor( Math.random() * moviesMuchu.length)
movieAreaMuchu.src = moviesMuchu[movieNoMuchu];



const movieAreaTakao = document.getElementById('movieAreaTakao');
const moviesTakao = ['https://www.youtube.com/embed/NBIz2jw5UZs', 'https://www.youtube.com/embed/kLyAEL4tdQ8', 'https://www.youtube.com/embed/VMWZgVv5-V0', 'https://www.youtube.com/embed/o49uUBoc8h4', 'https://www.youtube.com/embed/a8AD0mEfEPQ', 'https://www.youtube.com/embed/ImUMN-7A1ZE', 'https://www.youtube.com/embed/piODBb0Q5nE', 'https://www.youtube.com/embed/8cqu3hDhHSA', 'https://www.youtube.com/embed/fMU2Fvz4OBk', 'https://www.youtube.com/embed/OLH0_gK6mwg', 'https://www.youtube.com/embed/cmgbsJF6Xec', 'https://www.youtube.com/embed/yrriNLNbuCs', 'https://www.youtube.com/embed/2v95O14BrSw', 'https://www.youtube.com/embed/beDHTvVSJRs', 'https://www.youtube.com/embed/hnmeC3zpMy8', 'https://www.youtube.com/embed/5dPuwehfujY', 'https://www.youtube.com/embed/GDuQy7gxUjc', 'https://www.youtube.com/embed/qnYXqa9bpc8', 'https://www.youtube.com/embed/7Cz2EtWWByI', 'https://www.youtube.com/embed/rgTykzgEeNw', 'https://www.youtube.com/embed/a8PQ0wu2hkQ', 'https://www.youtube.com/embed/8KoO2s4DLo4', 'https://www.youtube.com/embed/zXfhEztvfPE', 'https://www.youtube.com/embed/OG9lYPND81o', 'https://www.youtube.com/embed/TYlrxV4Bfhs', 'https://www.youtube.com/embed/-aLVG1Vy1GQ', 'https://www.youtube.com/embed/YLbzl0voOUI', 'https://www.youtube.com/embed/4I5rlTkC4Nw', 'https://www.youtube.com/embed/6rT-mJipUTs', 'https://www.youtube.com/embed/tuCQuBnaU3A', 'https://www.youtube.com/embed/lZ1YV4WQS7I', 'https://www.youtube.com/embed/95ifq4o0Eec', 'https://www.youtube.com/embed/vgA3xwdnxWg', 'https://www.youtube.com/embed/lUDJP7JY-oc', 'https://www.youtube.com/embed/AViVj2GUf1A', 'https://www.youtube.com/embed/HIfHrUnKUUw', 'https://www.youtube.com/embed/m-zJWh_eCFs', 'https://www.youtube.com/embed/wY-vmGwiI3c', 'https://www.youtube.com/embed/BP1Idvqo3AE', 'https://www.youtube.com/embed/rFrOnNfccaU', 'https://www.youtube.com/embed/biOv9Nf3M7U', 'https://www.youtube.com/embed/UeplVhP15K8', 'https://www.youtube.com/embed/VOqr4oHs1Sw', 'https://www.youtube.com/embed/cjdyppjYO_M', 'https://www.youtube.com/embed/_RnTwG3nAKA', 'https://www.youtube.com/embed/ivg1fTS4fuA', 'https://www.youtube.com/embed/ySTt0ccMM28', 'https://www.youtube.com/embed/n0YLe7OLdmQ', 'https://www.youtube.com/embed/0bZMm9UTaHA', 'https://www.youtube.com/embed/xRVWviVI8WE', 'https://www.youtube.com/embed/_JRdh9FQHlk', 'https://www.youtube.com/embed/SRr4RfTd-I8', 'https://www.youtube.com/embed/IGuC4NWb1Tk', 'https://www.youtube.com/embed/qgVfAgAorA4', 'https://www.youtube.com/embed/nqy6lbOxTYA', 'https://www.youtube.com/embed/oBgmNwUkG8Y', 'https://www.youtube.com/embed/53XHP9cYXLM', 'https://www.youtube.com/embed/_emZ8AXYJKM', 'https://www.youtube.com/embed/LIdCK1BMF0w', 'https://www.youtube.com/embed/lJXYePnlNLc'];

const movieNoTakao = Math.floor( Math.random() * moviesTakao.length)
movieAreaTakao.src = moviesTakao[movieNoTakao];



const movieAreaTokiyan = document.getElementById('movieAreaTokiyan');
const moviesTokiyan = ['https://www.youtube.com/embed/YGRM61ATQzI', 'https://www.youtube.com/embed/23MaYZRUD6U', 'https://www.youtube.com/embed/U89ttGSIUkQ', 'https://www.youtube.com/embed/0vUFb6mX1a8', 'https://www.youtube.com/embed/7AzyPPPKCZU', 'https://www.youtube.com/embed/oX1jd5_DWG0', 'https://www.youtube.com/embed/P6fQgxDMFlE', 'https://www.youtube.com/embed/xOjASigLyT8', 'https://www.youtube.com/embed/8eYugXj0T3s', 'https://www.youtube.com/embed/HFNnN6vXiJ4', 'https://www.youtube.com/embed/AvlPi11eX5U', 'https://www.youtube.com/embed/zIU-K6RE6dk', 'https://www.youtube.com/embed/y9ih38ce1pw', 'https://www.youtube.com/embed/mBlSdS9HhgM', 'https://www.youtube.com/embed/MGct8ZXtNJI', 'https://www.youtube.com/embed/tYNJnAIqocw', 'https://www.youtube.com/embed/6hk5Zz9WgEI', 'https://www.youtube.com/embed/jmTiVgvBIhM', 'https://www.youtube.com/embed/WukRGcKYigg', 'https://www.youtube.com/embed/cwdgqM-7f08', 'https://www.youtube.com/embed/ct7xsehq2MI', 'https://www.youtube.com/embed/4_DYYW_cvdI', 'https://www.youtube.com/embed/97jO5rRzEJ4', 'https://www.youtube.com/embed/xQOJ12p83LQ', 'https://www.youtube.com/embed/OlBIPT7tfJs', 'https://www.youtube.com/embed/pJrT2MFCyb4', 'https://www.youtube.com/embed/w1A28ZjrTBs', 'https://www.youtube.com/embed/1JoAxeeMyHo', 'https://www.youtube.com/embed/J21_iHexQac', 'https://www.youtube.com/embed/ZevUxdOlr8A', 'https://www.youtube.com/embed/Vv3mHyNEr_Y', 'https://www.youtube.com/embed/vx85iX8SuRY', 'https://www.youtube.com/embed/dv9EjQDnZz4', 'https://www.youtube.com/embed/G-LUdlyetp4', 'https://www.youtube.com/embed/YkTx18zFOSo', 'https://www.youtube.com/embed/9m6rhsNeA2Q', 'https://www.youtube.com/embed/XRce9aQe8tU', 'https://www.youtube.com/embed/UOmLScQxUQE', 'https://www.youtube.com/watch?v=X5E9m8nylj8', 'https://www.youtube.com/embed/ZThCl21RsMM', 'https://www.youtube.com/embed/M9cwvKUv-I4', 'https://www.youtube.com/embed/hzK3dc1w8uw', 'https://www.youtube.com/embed/wXdct8yqPVU', 'https://www.youtube.com/embed/z5Kg-vfJcOk', 'https://www.youtube.com/embed/_3XEPHbAFpc', 'https://www.youtube.com/embed/3PYGMlUL0JU', 'https://www.youtube.com/embed/Qt_Rn17xU28', 'https://www.youtube.com/embed/v6N-Wz1EVM4', 'https://www.youtube.com/embed/bX5N3xeu32E', 'https://www.youtube.com/embed/9mPfB-hxA2Y', 'https://www.youtube.com/embed/-MZ6DPauSx8'];

const movieNoTokiyan = Math.floor( Math.random() * moviesTokiyan.length)
movieAreaTokiyan.src = moviesTokiyan[movieNoTokiyan];



const movieAreaUsi = document.getElementById('movieAreaUsi');
const moviesUsi = ['https://www.youtube.com/embed/2bXrgl3Vglo', 'https://www.youtube.com/embed/IztKZPHHhas ', 'https://www.youtube.com/embed/rHgboqxLxGo', 'https://www.youtube.com/embed/jND3S6SVH3M', 'https://www.youtube.com/embed/a0sZxhMXojw', 'https://www.youtube.com/embed/yGOjV3Ig1AY', 'https://www.youtube.com/embed/VwfARxD0r20', 'https://www.youtube.com/embed/TKkqkI-7NLs', 'https://www.youtube.com/embed/mjKr78gjeKo', 'https://www.youtube.com/embed/mxZQ4TWkRJY', 'https://www.youtube.com/embed/pJItqUy2O-U', 'https://www.youtube.com/embed/0bk_j28na_0', 'https://www.youtube.com/embed/qRjgdWns88c', 'https://www.youtube.com/embed/AUi4v1HRBg0', 'https://www.youtube.com/embed/8hPVM7d_3h0', 'https://www.youtube.com/embed/3lY9Rl8iLTQ', 'https://www.youtube.com/embed/CcHiUchytWg', 'https://www.youtube.com/embed/YMy0Xde_aeg', 'https://www.youtube.com/embed/oEcK3xyN2oc', 'https://www.youtube.com/embed/FI8VQWx3W-8', 'https://www.youtube.com/embed/jpo4d0wVSNE', 'https://www.youtube.com/embed/9aBGQxkKsyI', 'https://www.youtube.com/embed/afQi74I4l24', 'https://www.youtube.com/embed/25dg9ByR1e4', 'https://www.youtube.com/embed/-k9VZU1ETJo', 'https://www.youtube.com/embed/WjRNT4aVYjI', 'https://www.youtube.com/embed/h3rfmS8_ASk', 'https://www.youtube.com/embed/pZAV6bsfrW8', 'https://www.youtube.com/embed/-R-Ar8J2OoY', 'https://www.youtube.com/embed/zyqcB5qSBB4', 'https://www.youtube.com/embed/uL19zNA9QKk', 'https://www.youtube.com/embed/e9TkJaMrLN0', 'https://www.youtube.com/embed/7w-t0igE4Hk', 'https://www.youtube.com/embed/EOLAt5VurnA', 'https://www.youtube.com/embed/uh44JtjvDEo', 'https://www.youtube.com/embed/w0oALSnG_OY', 'https://www.youtube.com/embed/h0BajKPsvWs', 'https://www.youtube.com/embed/CjFVm_SA3ks'];

const movieNoUsi = Math.floor( Math.random() * moviesUsi.length)
movieAreaUsi.src = moviesUsi[movieNoUsi];
