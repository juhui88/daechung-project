import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { tokenState } from "@/components/atom";
import CalendarBar from "@/components/layoutComponents/calendar";
import NavBar from "@/components/layoutComponents/navBar";
import Layout from "@/components/laytout";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


export default function Home() {
    const router = useRouter();
    const [token, setToken] = useRecoilState(tokenState)

    return (
        <div>
            <Layout>
              djfs
            </Layout>
        </div>
    )
    
    
}