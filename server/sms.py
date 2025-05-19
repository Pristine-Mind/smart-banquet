import requests


def send_sms(mobile, message):
    try:
        response = requests.post(
            url="https://sms.sociair.com/api/sms",
            headers={
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMzdjMDMzOWViYzVhYzA4MzM0YTZlNDdmMzk3NTk1MzBjY2E0YTE3YmIwM2U1MGQxZTQ1NWE3NzczNDFhZTdiNjYwMzY0OTRkY2MwZTY1N2UiLCJpYXQiOjE3MzAwOTQwOTcuNjczMzU5LCJuYmYiOjE3MzAwOTQwOTcuNjczMzYzLCJleHAiOjE3NjE2MzAwOTcuNjYxNDI1LCJzdWIiOiIxMzYxIiwic2NvcGVzIjpbXX0.u1TwO2PK7xbPYA_C3NzH818VAJG_P3xtnizMAa-Zj1822TGPFrx_ROWO8TcVUU38eOueGNmO37zmjPKF_TbnW8PkF3FcQWBcF1hH6CR8NTPymMceUFCoomBjZ57qEJWPfMmZbOobslQrExuaQIfTWkvDVyR046DVCnp6yTX9u38TuNtKX9Oc43pNVkHYm9uvWohHvXwAx42oiUDh9NziPxkqTHTUAOiZ8ghLsaen7HgIj-lszfG32m3w5MgGsGiLo-9DwhRSObLP3IdpR1Dtk48wOo-qp_9_RRgRrwkZmalu8rEro95uPya1HQ1q57iGJXNs03hhQml8CxeKJjvUVKNoPhGAEoh3LzjeOd7j2WbYiCjvIXVcZBA8CuJtSMesjMDtbJMgik2U1Am6GfW4TCya5pDArpctrrvJ4DXZmmUo0h6IE9MI1Om-dvxMonxt-BJQrpVWCzbtSZg3f9nelMv7tCPFwK8NZ6zvzojeThTQWEyl96cVLpKc0DdqdR1fMa5hOfnaFxAdCktfwhAvt1B5IeEcQnuuCGB2hWYQqBiyw46_oMiGdhIEDZj6l4DWxFppc-VvGSPu66SRgW-I0Spn22a5ksSVRi-Ts1jQZTwu_LaUaxnMnylnO0RHBFrTZ-URc9S3DK4UhQBpyS4MmBFDIp8GQvhuwZswCsLbJ1o",
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            json={"message": message, "mobile": mobile},
        )
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        error_message = e.response.json().get("message") if e.response else str(e)
        raise Exception(error_message)


if __name__ == "__main__":
    try:
        result = send_sms("9860654813", "Hello miss, How is you working going on?")
        print(result)

    except Exception as e:
        print(f"Error: {e}")
