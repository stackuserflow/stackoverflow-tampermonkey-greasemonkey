// ==UserScript==
// @name         BomDia
// @namespace    stackuserflow
// @version      0.1.0
// @description  Bom dia ratazana
// @author       Guilherme Nascimento (https://github.com/brcontainer)
// @match        *://chat.stackoverflow.com/rooms/*
// @match        *://chat.stackexchange.com/rooms/*
// @exclude      *://chat.stackoverflow.com/rooms/info/*
// @exclude      *://chat.stackexchange.com/rooms/info/*
// @grant        none
// ==/UserScript==

(function (d) {
    'use strict';

    var pg = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/
    2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwM
    BwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM
    DAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCABaAHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEA
    AAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJx
    FDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNk
    ZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJ
    ytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQF
    BgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMz
    UvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3
    eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna
    4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD4/wDiX4+8E6341vbrwmBo/h+ZIPs1nc3Y
    kkt3FvEJxuaSQlTOJSm52OwrnB+UeP8AjvSQ2vyXkN5b38N1gEq8fmKQo+8FA9DyB6Z5xXvmi/sG
    6a9zbLeeMJoRd7ljSLS/MkJ3BU58wDb86ksQOD0Ga6zQf2AfCj2gtbzxfeXWryN+7js3gIVOQcoQ
    xLcDCozA54JyDX5bRw8KdR1Iy38lb5dj/R7MM0q4zBQwmIjbktaXNJy0VrybvzNrdu7b13PkeHS/
    MK7fy969E+EXwQuPGl7bTTRGPS3k2PcPGxDYBLKmPvMBjp0yOmRXruk/sf8Ah201uT/iYa5eW9vK
    FBmto7WOXuQxZiV7c4zyOOePUbbwbpcF61nY28m6C3MX7x/lt16BFbIAULliSMY+8dzDPb7SNrxP
    Lo4VQ1ktTgovhvFDI1ndT2trbQvH9mtraBlmk5AKqVIVVI+8z8Kc4yQSex8R6Zc+HNFmksdFsbf7
    CDFJLLKJZxjcjl2I3Mox0BXvgjINefeM/iw1grQ+F4418hPJeaa2TdINxKn5uM4Y/fx948Zwa9l/
    Zq/Yb+LP7WdjNqS6nJ4UtrOAxw3rIIVmd8bixUFpHRAMssbgEkFw2dvFHD+0fM2k27Xbsm+xOYZz
    QwME8RK0V3PKNCsre4v2WzfU5oTF5whl+9DnoP3gCBW9Q7kccnIz3Oi6q2mSRx6hb+TDL8qS7gVG
    OxOev6e9fRXxM/4IFalongOfWtM+MGs3PiJgPPlnhjgsXgcKCM7y45wc+Zhv7uQM/G+qeCfEH7Pf
    xXuvDviyeLUJrNo3iu0lwZISxQsBuO8b0ZSDuwY2xzkV7mDxGY5FXjisPJJrt1XmuqPn6ObZRxHT
    lhI+9Ha/W/lezXrY9g022t9UsGuLN1uIg2Nydv09CO351Euh+Y+XB6ccVwukXXiTW7yO8t3ke3WJ
    WHkwKWhUoC21eWJzkjcCSNvXNeleGvGFnq1nuvN1nMi5/fRtD5g6AhWAbk5GPX1r924P8UMPmT9h
    mKVGp0191/N7ejPzPibw7xGCj7bA3qQe6+0vu3+RTXw2JE+VNuRxx1pj+Gfs8W7b/EOPp/n9a6Sw
    1jTNUmZIb60kePG5N+Cuc4znvwRV29s18v7v4kcV+oUcwo143oTUl5NP8j87xGDrYd8tWDi+zTX5
    nB6pp6tBtVWypyT2I/z61hXehl9xZSMngY6V6Ne6UshPy9R0xWTqGkeZ2AXbjPt/n+f59HPpqZ+z
    uzznWtD2qSF7dqK3PG2tWPhuBftUhXzMhAIyxbH07c9//wBZXzmM4qyrBVXQxeJpwmukpxT+5u59
    dgOAc/zCisVgsFVqU5bSjCTTto7NKzPDfhZ+0lqHho29rqzLeWcJ+RjCvnqQcqQ4weeR8xbGTgd6
    6/Vvj/4HvtQS+bTdb02RYmKz2bpHPLPgBUOwDg92Ys3y5wM4HgGnzblUN0x6VcWHI+VmHcYr+QpU
    Vsz+l6VCpOnz0Gr26/8AAtc+ide+PtrZfYJP7P1q20/I/f6vtN0yEbgRA331yCQc4OBnHflPEvxi
    XXnaO3kvFtbppBiSL97himHbawzllPIIPy5wMjPldpr1zYuoZmMfdV7/AKU241AzXizgyNGpBHOW
    GMGpWHXU19nOMdbX9P8Ags+zv+Cdv7GUfxd8e6x4wuBHqmn+FbSS4srDbuXUbxkc29u4/iVTGGcf
    xb1HIOT9Fa98av2mPhD8TRpvhjwHDc6XZyGODzJFt2volAAMUMiQsOoxuZi21vmLYDQ/8EtfG/ge
    3+GV9b+DNUvp7PRZze6k2oQGGaOSSFGZD/eRMbQw4JVsDGM+q+EP+Cxnw58f6k3hzT11LS4pEeNd
    T1WMw28rkYRUjhaSbaxP33jUKASele5jOG8Hj6VP232b2s3u+ujWvZn4jmlPNMZmFaOHwrrRjbmV
    m+VPurPffu16E/7Sn7VvxU+Avwj+Hupf8IHfeK9Q1yO6uNTtraeOC30e43x/u5ZncKCvmuqAEggN
    ydoNfn1/wVJ+Md78SL74W+L9c8LyeHGu4NUs/JvbcjdJEbQhXzneEMjd9rBsjgkVu/Cv/gpL448M
    fHrTvEt9468QX9pHrSreWbanLNpbWRnAnt/sYUqfk3bSoDhsEfMM16d/wU58d6f/AMFUf2gfgL4L
    +HY1bxBo+sXd6Zryy0p7i90yAy2qy3IglkhXy4445C5lYIOBlXwDx5VlGDxuKeLvNSguTW+yVtnp
    0v8AqbcZ8M5hwkqVamqdRTXOpwb5U+a/K9Oz0beqTdlY+TPh3+0BbeItQMN5cXEi3m4NcWrmOYER
    4GD0DDHpjGfWut1jx9oGhmz01dU1RNSmhUFmaRVVmwSXkQHaOQPkQYIOcnmvon9qz/gg5o/7LXhn
    Q/Enhfx5rFxplvtsNQXVNMjW7eWQuwkjKMqMpzsK4ymF/wBYCdvB/D74QaX8NrJo4biS+umXY91M
    gE0g3s43cnLfNjIwMKoCjBz9xk/hpiMfWc41FGl/Nu79rafj8jsw3inhfqMas1zVH9mN0vvaPNLC
    S41eZY9N0fxFcSSEYSW1EUMkDhtzqx2hcYADOfmLrhTmun0j4or8ONPWz1TTdQiuJAGNubmKRoVy
    wQkhjyygEgcZGerHPX+JfElv4b024vJJisVrG80shO7YiLuZvwHP+efAdQ8Vf8JlfTam2Wa+bzSN
    +7ZwMLn2AA/CvezrI6HCNOGIwdeTryuldK1ravl6/efbeGfsuO8ZXwuZ0V9XpxTsm+Zyb01TVtLv
    Q9Sf9pLTHjY/2XeK2QBmVWDf54/M/jXvP2itNltCsdldLIw6NGu3dz33fTnHc8cfN95/8E7P2OPh
    3qv7H/hjXPEHhHwvrniLxTdRSzT6rYW95J5X2gyFYzKj7P8ARscLgHaCcEnPsPxb/Zo+Dfhv4LeO
    NSv/AIb+AxbadFe3oEOgWsEvl2scjMqyJCkiFhat8yMv3iQWyTWOH4o4lq04zWJiub/p2v8AgHze
    aZ34cYLN6mVU8pq1HCo6d1Vlq1LlbSctr3tqr+XT8bPGnjD/AITe9hby2j8vgDGckn/9X4n8aKoQ
    2+bcM3J4BOOpor87zChicwxEsZjbTnLdpWvbRaL0P7WyjLcLlWDp5fgI8lKmrJau2t922+vVnhhs
    zG25eKltzuXGNrLyeKlhmEKnfgKvOc8V9Bxf8Esfjpc/DL/hLpPAt5Z6X5H2popriAagsOM7zaB/
    P6c7Nm//AGa+bxWYUMPb6xNRvoru1z+f6ksNhZQ56kYObslKSjd9lzNangMFrJqNylvBFLcXEx2p
    FEhd3PoFAyT7CvQPBv7GfxW8fa1aWmn/AA78Yxi+bC3V5o9xa2sa93eWRAiqByTn6AnAr6A/4Jj+
    FPGtl8SvEWl/Dq/8FW+v6ho32qTU9f08zm0hilQYttocqzNKu7crKVUEjKjP6NfCjTfFXwo+FGoS
    fFHxn4a1K8kn3vfQWUGkWVrG4VVh34jWRmbOHZVJLY5xX5nxl4kVslrvD0IQk7Ky5pObv1UUrW9W
    eLxtmmIySr9Xmqbq+7aHNJzfN15YwcbL/Hd9Efnb+z34b8Uf8E8/iXeax4gsxJoj+I73wzqMCLuj
    lgt38qKY+vmlLhlLYGCgHUCvoC4/4J16L4807R/Ffwj03w14+0WZpppdC1a5gintN4A2287qFZFw
    P3U+WQgEl8/L67+0t+z/AKP4z8PazNesq6F4kQG5uyT9mEjYKTCXlYZQ21gzfunbBLRncG/OnUfj
    F8TP+CffxSvNHsdYvNL1Fo1niaJN1nrVs2fLnVHBjkVgDh0JIIIDcV+i8A8eYXNsMqlFqSfxQfxR
    a8n08z84w+aV1H67hK6hVatJTT5KnlJKzvFuyaaa02PQ/jz/AME6PEfgbQ9T8QeIvAtn8OfDNn59
    3c6jeX1tfSzTycpEkdtcOspLfKm4RqC/IZgM+P8Awv8A+CjPxE/Z/wDivqMXwputJ0LT9Y0qXRLW
    a60u2uri1s2laXzxKw/dyGQmTaCISzLlDhMYX7Tf7bnxL/aX8L3UPjLxBd3kv7qCw0+K3WO3ijZi
    0sm1R/rWKxR5YkmOWVc4LBm/sUeDPC/xc+L/AIc0vxEkumyeMNYt9FvwXP2a1sDLEtz88mT5pXcA
    qkKqsOjKC36Xg8ZhpJzj7qvb1Z8ZxNiM5zStDL5xSXLztQUuXlV7uzcm/Vv0P2F/Y5+DH/Cwf+CV
    vhy3+Kni7Vp9a8T6VH4s1bXtXuI/N0qWU+dBuLrhUjjKRleCRvGQXNfI37RPwK8SfATxjBpetNp8
    8N9bre2N9YT+da6hbsSokQ4DDkEFWAI9wQT9f6P4d8UfFnxVbaX4n0rw3oPgq2uoriO30jxDcX8m
    oLbTBrSMp5ESxKWTznwW+WRYufmZeD/4LLXei+DZvh7qdzeW9jvs760Y3E+0MsbW7qAWOTjzX75+
    av0rgnNKlPFLCN+5K/32vdfdqfn9Si6NXllK7nd9Hay7p79/K3U+A/2hbhk+Eevw5Ki4t1tmOeqy
    SJGw+pVyPx/PyDwPpElhp0kkg2NMchT2Hr+tej+N/iTonjXwuraPrNjeeTcrLthk3sxTJA2jkfNt
    OSAOOvQHjY76aRsrHNtJzlgOSPXJxXyPixjKdbNqVLdU49NdZPV7n9nfRvyGnQyipmzfvVJtL0jp
    +bZ9yfCP/gsPp/wg+Efhnwxa/Cua8k8Pafb2huv+EumthPJFbrA0ojSA7Nyg/KGONzcnJzU+OX/B
    Y+4+L/wj8U+FbX4cnRv+Em0+bTzeN4pnuxbCXIkfyGhCMxVpBkFTmRjk5OfjZ/FNxJYrG1nbL5Tm
    TeLRFZiR909to5wMDrVGWSRlVtrR7huChkbP/j2f6/rj4WWb1orlpTe23L/mff0fBvg6OMWYSwf7
    3n57+1qv3k+a9nO2+trW6NW0LTjNuoH9705orNttSkBA3YBIw+4Er78ZP5f4UVh/alOdna2iWtls
    fqLl/KfQn/BH39jTTfiV4tk+J3iy0F1ofhW9WHRbOQZivr9MOZnH8SQ5QqvRpGBP3CD+pl54wZrQ
    XUcc11Dlt5hO5lI6/L3I5yOv1rwv9lT4bQ/Bn9nnwb4SijVZtP0yP7SAcGS6dfNnPrzK7/pXoWna
    7FozNqSn9zC6W+sQYO5Qf9Xc49QOpHDLu6lQK/hTxG4wxWZZtUpU5tQhpG3kz/PrizESzTMJ15ax
    i7QXS17L0cnrfu0trW/L39ozStQ/ZS/a71+TwXql1oyw3H9paPd2EpjaK2uVEgjHqi7miKMCCEwR
    Xq2gftH3X/BRr4x/DnwL8Qn03QfD+nSyXc9tYvIieJNQC4jQlifKLLuVVBON8oU7pEC8r/wVM0u1
    0f8AarVbWSN7W50G1uFZG3IweW4YEEcEYxivnBrraR5fVSCD6EdCK/asuw9PMcooYutaNZ07KVk5
    RbWrX56/I/szKchw3EGRYPM6qti/YpQrW9+EpQ5ebzau3Z7Ntx5XqfUv/BTP4i634A/bNb/hH9b1
    bRbnRdDtbeNLG8ltltC7y3BQCNlKhvNUsucMNoIIwK5f9t/9nuS7/ZH8NfGqw1CO11nXJ7CS/tbY
    tDbzi6jlmlR4cHOJiSHEoXBAWNa8Bvb241a9knuJpri4mbfJLI5keRj1LMeSfc19Oan+2H4T8Z/8
    E6rj4b6tFdWPjbQ3sbDS4YY2kh1GGKVHW534wm2KN0kRjncVK5Eny6YXD4rLVg3hI+0VJxjN2Sbj
    Zptrqr6ta/efHcX+HfssqyvLMPBytOFKrUhG0uWWjm+qSl7176dXa7Plfwp8DNV+IP7M954ok0q/
    ultr94r3UNojtgitGhXPCliZ4MKvOCeCM45++ubyz8Jab4fa6kkh8NSyxwKYFhezkZ1aSNXUksoZ
    QwbjliRjNepRfHrXvD3wJ1zwTb2+mzaRql4NUmnZG+27wY2aMNnaYy8UUhyC2Y8ZwxA8SfWI7fxN
    DM0yrY6pIsczN0t5uisfQNwD2yBzX6Dl1TE4pVVVtrJygk9l28nv8jNcN0cicI4uCcozdNTe7pSS
    Sk23/O7Svsnc/Qn/AIJi/tIax8SdTTwhqWranPq2mAXNnN9o3PJbqRuLbkKgR5GSXBIP1z9ff8FJ
    /wBm6H9un/gnh4k0fRLTS/HHjTSRHqvhi8inVWe7imRZPImRhFIzwmWAAZjZpVyQRkfidbePbn4Z
    +KY5Yo7e4KsFlt7je1vcoGB2uqsu5SQOM1+6v/BMz4+Wnx2+Bdnm6SZprZEZ0jSNV2gjCJGNqorZ
    2qAMAYxxk/rPCuZVK1CMat+Zde6/rQ/mvxq4XoYPFzxmDVo396KXwvrt0e9v6X4G/s4+G73S/iZ4
    gsdQs7qw1DS7GeG7tLmM29xbSxzxpJFIjAMkiMCGQgEbWBxzXr08KlOmGC/3s5H+fx/lX1z/AMFe
    P2Abn4OftVeJPjV4f3SeFfiBuGqptBbTdUMkSv1/5Z3ABcNyRIJFONyZ+RGk8124/wBWfSvM4gvT
    xLut7WffQ/o76NsIrgqlG9/fqfLW9n8mSJAEHHzMBjJJNRXS5B7+xHWp1kwh/wAKinw6n7y+pC5r
    ynyuKgup+8SjZaEVjbLcfLhVZv4j83bv/U9uvtRRaqd23bIzN8ipGuWZuwA9ye3/ANairo06MYJO
    OpwVayg7N2P1Y+FHxa8KfHXR5LrwX4kstca3w8tnG/k6lbpwVdoGxKhVsgttK5UEEg5rW17xTNZD
    7aRa/amX7HM0jCG11BXIIiftDMzDAB+Ult0RZv3J/HnTNTmsL+G6gmlt7y1YPBc28hhuImHdWXBB
    +hFeqWn7b/xQ0vR5rabxpeXtu8LQyHUraO6Z0IwyyMVLSKRwQ5YHuDX8nZj4P1HjPb4SqpQbu1PR
    r0a306NfM/BM08Da0KntMvxClDtUXLJLs5RTUvuj96TUH7VHxIX4mfHjWrpVuVt9LK6VCsyqskSw
    5VlIVmUYkLj5WYehIrz1mUj7u30xWZpst1M7XEscf+kHzGMCosXzc8BBsUc9BgDpgdK3tA8Nal4r
    umg0nTdS1S4UZMVlayXLgf7qAmv1Wjg3hacMJCOkUku9krep/QmR06WFy2lS+GMIpa6bJalXzsJt
    Vce9dT8Ifgb40+Pet3Wl+CfC+s+KtQs7c3U8GnW5meGLcq72x0G5gOvOfY1yjgozK3yspIYHjaR1
    B+lfrF/wSA+B3ij9kH9jT4ufFfUvDdxceItdsPtWg6Oy+Zc6hFZ20stvHsjy6G4uJ9mzh/kUkD5T
    XuZFldTMMV7OV1CKfM0tlZ+W7eh8f4rcff6p5DLMKChPETlCFKE3ZTlKST6p2jFuTs1tq1c/MPx9
    8FvF/wAJ/HsfhXxJ4Z1rQ/Ekwh8vTLu1ZLiYTHEe1P4t54GM5OR1BFc7+0X+y/4x/Zlj/s3xv8Pd
    c8J/8JVFL9kfUYDCl2kZQvszxmNnjJweCyHuK/eX9tX9jLwP+0p4z8F+MNV0+4sfEFpLYC11ZJCt
    3axW9wbmK3KcxsGaeUMCMjqCSFr4m/4Opdd/sZ/g7Nghms9eCnsG36eRX2tLhCpguepGbkuaPKvW
    ST5tN15bn87U/pEUeIJYDCVsPCn7SnXdduN+R06UpWpttrlnZp83vL7m/wA/f+CYvwL0H9rX9phd
    M8aaD8SvHGi+GbUX99ovgvSzdXmtBG2R28lyZYksopWB3TvIhIUojRu4lj/Vr9m/wNp/7OtvoLab
    8E/iV8A2vZDbar4d1e/bXdHjdmdlltdVM0hZnUYaJ9hycqihWZ/P/wBgzxkn/BMr/g3F1X4zeGtL
    0+Xxx4gt7jX5bi5j8yO4vbrVRplg0q5BaOGJrZvLyASJMY8w17r/AMEZ/wBrzxx/wUJ/Zq8aaP8A
    FptP1TW9NnghXU7e0hhW9s7yJ2iZkhCxeZFLDLhkVeBHkblLN+gYfB+xfPCOnV20X6+nQ/lmtxdj
    sfTqYmtK8KXKpJzlzSi5NKXL8MmrpNyvLazSvb2X9o7U/C//AAzH4z1jxYtu/he10O5bUUlTcGUR
    FVCg9WYlNoHJYgDnFfjb8Iv+Cf3xv+NPg601zw/8MPFV5p91CssN3LClnFdoygiSIzsnmow5DJkH
    PBNezfsc/td+LP8Ago5+2v8AC/4b+Nnkh8GtevqOteH4pVk0u/bTraa7iRoDGFKGaBA4YsHDHIwN
    tfTn/BQj9uj9pLUf22dQ+C/7Nui6bqus+FvD8OtanE409Lu+aQRu376/kW3jiRJ7UAAbyzsclcBf
    Kx+Mw2OjF3fKpcui1cmk+uyS/rQ/deEc4z7gGdXJ8AqMq1am8ROVaUvY0qUG4r4LSc5O97dORWbv
    b8y/H3wU8Z/Cfx7B4X8TeFfEGieJLpo1ttMubCRbi88xzHGYUxmYO4KKY9wZgQCSCK9C1z/gmz8f
    NI8Htrlx8JfGa2KR+Y3l2izXSr72yMZx7gx5HpX3f/wTc8DftAfGD9v/AFbx9+1B8ObPwf4u8J+C
    rex8MNFqWnXscqS3UyNMq2U0qRyKGuVJZlJF0+FwBjyn9l7/AILufED4yf8ABaW6+DmoWWmr8N9V
    8Va14T0+CNI/NsxZC7W1u1cRiUyTPap5ivKyKJ32qNq1jHIYu6k35baeb/4B7ObfSsxaVOGXU6En
    GmpVXL2/LOd9adFKKa0s1Kp7t7rSycvjL4N/snfE79oTwxdax4J8DeIvFGlWtw1lLd6fbeZFFOES
    Qxk5A3BZEYj0YetFfZP7fH7ffxO/4J5f8FLdT+Dvwh8N22pN8a59N8XafYQxWwafV9SJ0+XmSF9q
    yTWHmMxOAzyOcCitafDn7tc7f3xV/PV3Msd9J/H1KvtMEsLGnJJpVFiHON0m4ycY8rcXdXjo7XR+
    Zlk/mzFsngAcGo/Fl88WhzKgZ2cBQMZ3EkDGO9Fjy34is34jKH8OxqwBVpo1YEdRvHBr8go+9VUW
    f2hmtT2WWVqsd+Vv8B39qJpoVZrNbSQdSqGP9CK+rP8AgmX/AMFEdG/ZQ8Qa5o/iC326J4kaGYai
    sjD7DPGGX94FjdjGytjKqdjKM/KzEfKum3syQRxrNIIwQAoY4A+lbXh60huLuHzIo5N0qA7lByCw
    zXq5dWlgsXGvS38+z3Pj+IeHaec5XLLsXL91USbSVmrWa1TWqa7ep+nXxW+AHwl/ag+IK6/e6Dqc
    uuahsubg+Hnlc6opGQZI4V+bcOfNUK7Z5c8Gvvrxt418I/BT9lbS7r4jatq2jaHJDafa5tl5NeJO
    7i4WJvs6yTZDrsbqMAqTg4Pzl451a68AfA23tdBurjRLe30yMRRWEhtkiAjAG0JgDA9K9Q+Luj2n
    xOtPC9j4ktbfxDZyWd+72+pxC7iZttvyVkBBPvX7NHCUaMvaU4pOersrXfmfwHnuKxGcZhgMnxta
    o6NKclFc93FRS+BtNR0Vlo0rLRpWPRfE3iLRfil+zTpHiDwfqSzaHa/YtT0+7uEltx9ljdA7OJwk
    iAW7SHLgEAAnivkX/g4O/wCCefxV/b68NfDe3+F+kwa1c+GrjUPt1vPqdrYRRib7PsdmndSxHluA
    EB+8d2OM8J8GPib4k0b9jvxjb2fiDXLW3t49TSKOG+ljSNRb8BQGwAPQV6z4q+NvjO2vJBH4u8Tx
    jeeF1Scev+1Uxqao/NeIMC8pxlahQm5KnOpFN72klHVq13brZa62Wxxvwz/ZF8afHr/ggd4w/Zjv
    odN0/wCMXw+hfw7qOlf2hDJDBqFvfQa3p8LToTHi4spbFt+dqmchiCj4sf8ABDP9ljx5/wAEr/2N
    vip4o+PFrD4Pklvxq40p9Utr5rCxs7dsM0ltJJD5k0skgWNHY8Jn5n2j4P8A2avjl420z/g428RQ
    23jDxTbxeLLtYdcSPVZ0XWUt7CyW3W5Af98sSswQPuCBiBjJrv8A/g61+K/inT/iL8MfCtv4k8QQ
    eF9T8+6vNHj1CZbC7miCvFJJAG8t3RvmVmUlTyMGu3DpymqV9JNX+8+RjJ35b6Pc+fP+CQP7QVv8
    AP8Agpr8L9U8aXFvpNrNql1ompTPIvkW895aT2isXBKhFuJ4izZ2quSSBzX6M/8ABUb9hL9pU/tt
    zfF79nP+1HvPFGkWmm6pLpWu2elX1g8PlxSRv9qliWSGSOG3cbCx3RtlV2qzfj9dIsv7E8m5Vbzl
    E8mRnfIbkAufViOM9a/Yb/g3Q+M/jD4ofsARXHibxZ4l8RXGnz3Fpay6nqc929tDHI6RxoZGJVEV
    VVVGAAABgCjOuFaGXzjShJuLamujT2tfrp5I/WM646zD20czSi5zoyw8lJc0XTk29tNU3dPulpa6
    f2J4x+Oml+Bf+CmHg/wTdXENrdfEDwBqdzpIkcILufTtQgkaBAeWk+z3M8oAHCQSHjFfnF+yh/wR
    L+L3wi/4LqX3xU1bR9Ph+Eei+LNc8W6brqatayNqEd2t01paJbq5uVmSS7jEhkhSPFvMVc5j3fmx
    /wAFbv2g/H19/wAFA/G2rTeOPF82q+CJ7dvDl6+s3DXGgFVWVTaSF91uRJ848srhvm681+yH7cPx
    88deEf8AgiZqXi7SfGni3S/FieGmnXWrTV7iHUVk8ljvFwriTdnnO7Nbyo+xpwktedPdba9D8m5X
    FK3U9g+EXwA8M/tDf8FWfiR+0NNPa6xL8JdPg+E3hlIZEkW0v4YHutWucjgSIdUaxX5gUZb1WXlD
    RX5p/wDBCL4seKvDH7FOsW2m+JfEGn2//CY3snlW2ozQpuazsWZsKwGSxJJ7kk0Vz4qLjU5G720M
    paOx/9k=`;

    pg = pg.replace(/\s+/g, '');

    var custom = `.avatar {
        background: url(${pg}) no-repeat !important;
        background-size: cover !important;
    }
    .avatar img {
        visibility: hidden !important;
    }`;

    function trigger()
    {
        var s = d.createElement('style');
        s.textContent = custom;
        d.head.appendChild(s);

        setTimeout(placeholder, 800);
    }

    function placeholder()
    {
        var input = document.getElementById('input');

        if (input && !input.placeholder) {
            input.placeholder = 'Message...';
        }
    }

    if (/^(interactive|complete)$/i.test(d.readyState)) {
        trigger();
    } else {
        d.addEventListener('DOMContentLoaded', trigger);
    }
})(document);
