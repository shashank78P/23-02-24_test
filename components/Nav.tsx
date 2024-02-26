"use client"
import Count1 from "@/components/Count1";
import Count2 from "@/components/Count2";
import { useEffect, useState } from "react";
import navData from "./data.json"
import Link from "next/link";


function recursion(data: any, key: number) {
  // console.log("==============recurrsion=============")
  // console.log(data)
  if (data) {
    return <>
      <li key={key.toString()} className={`flex items-center px-5 py-2 w-full max-w-36 ${data?.subMenu && "parent"}`}>
        {
          data?.subMenu ?
            <>
              {data?.title}
              {
                data && Array.isArray(data?.subMenu) && generateSubMenu(data?.subMenu, key=key)
              }
            </>
            :
            <Link href={data?.link} className="w-full">
              {data?.title}
            </Link>
        }
      </li>
    </>
  }
  return <></>
}

function generateSubMenu(data: any , key : number): any {
  // console.log("==============generating sub nav=============")

  return < ul className=" w-full rounded-xl child py-5 border " key={key.toString()} >
    {
      data && Array.isArray(data) && data.map((sub: any, i: any) => {
        return <>{recursion(sub, i)}</>
      })
    }
  </ul >
}

export default function Home() {
  return (
    <>
      <nav className="flex w-full p-5 mt-5">
        <ul className="w-full flex justify-between items-center">
          {
            navData.map((ele: any, i: number) => {
              return <>
                <li className={`w-full max-w-36 px-5 py-2 ${ele?.subMenu && 'parent'}`} key={i.toString()}>

                  {ele?.subMenu ? ele.title : <Link href={ele.link ?? "/"} className="w-full">
                    {ele.title}
                  </Link>}

                  {ele?.subMenu && Array.isArray(ele?.subMenu) && generateSubMenu(ele?.subMenu, i)
                  }
                </li>
              </>
            })
          }
        </ul>
      </nav>
    </>
  );
}
