import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Payload } from "../types/payload";

export const useAuth = () => {
	const [authInfo, setAuthInfo] = useState<{
		checked: boolean;
		isAuthenticated: boolean;
	}>({ checked: false, isAuthenticated: false });

	useEffect(() => {
		const token = localStorage.getItem("token");
		try {
			if (token) {
				const decodedToken = jwtDecode<Payload>(token);
				// ミリ秒にして、現在時刻と比較
				// 有効期限切れの場合
				if (decodedToken.exp * 1000 < Date.now()) {
					localStorage.removeItem("token");
					setAuthInfo({ checked: false, isAuthenticated: false });

					// 上記以外の場合
				} else {
					setAuthInfo({ checked: true, isAuthenticated: true });
				}
			} else {
				setAuthInfo({ checked: true, isAuthenticated: false });
			}
		} catch (err) {
			setAuthInfo({ checked: true, isAuthenticated: false });
		}
	}, []);

	return authInfo;
};
