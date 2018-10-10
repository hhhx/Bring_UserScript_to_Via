
var install_txt = "安装成功！"
if (window && window.via) {
    if(window.via.getInstalledAddonID().indexOf(65535) > -1){
        install_txt = "卸载成功！"
        document.querySelectorAll(".btn")[2].innerText = "卸载"
    }
}

function install() {
    if (window && window.via) {
        window.via.addon("eyJpZCI6IjY1NTM1IiwiYXV0aG9yIjoiWG1hZGVyIiwibmFtZSI6IkJyaW5nIFVzZXJTY3JpcHQgdG8gVmlhIEJyb3dzZXIiLCJpbmZvIjoi5bCGIFVzZXJTY3JpcHQv5rK554y06ISa5pysIOW4puWIsFZpYea1j+iniOWZqCIsInVybCI6IioiLCJjb2RlIjoiQ2lobWRXNWpkR2x2YmlBb0tTQjdDZ3AyWVhJZ2JXRjBZMmhsY3lBOUlDaGJKeW82THk5bmNtVmhjM2xtYjNKckxtOXlaeThxSnl3bktqb3ZMeW92S2k1cWN5ZGRLUzV0WVhBb1puVnVZM1JwYjI0Z0tIZ3BJSHNLSUNBZ0lISmxkSFZ5YmlBaElXeHZZMkYwYVc5dUxtaHlaV1l1YldGMFkyZ29lQzV5WlhCc1lXTmxLQzljS2k5bkxDQWlMaW9pS1NrS2ZTa0tJQ0FnSUNBZ0lDQUthV1lvSVcxaGRHTm9aWE11YVc1amJIVmtaWE1vZEhKMVpTa3BJSEpsZEhWeWJqc0tDZ29LS0daMWJtTjBhVzl1SUNncElIc0tJQ0FnSUNkMWMyVWdjM1J5YVdOMEp6c0tDaUFnSUNBdktpb05DaUFnSUNBZ0tpQlZibWxqYjJSbDVhMlg1NnltNUxpeTVaS01RbUZ6WlRZMDVhMlg1NnltNUxpeTVMcVM1NXU0NkwyczVvMmlMQ0RsaGJ6bHJybE9iMlJsTG1wejVaS001cldQNktlSTVabW9EUW9nSUNBZ0lDb2dRR0YxZEdodmNpQlliV0ZrWlhJTkNpQWdJQ0FnS2k4TkNnMEtJQ0FnSUdOc1lYTnpJRUpoYzJVMk5DQjdEUW9OQ2lBZ0lDQWdJQ0FnYzNSaGRHbGpJSFJ2UW1GelpUWTBLSE4wY2lrZ2V3MEtJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCQ2RXWm1aWElnSVQwZ0luVnVaR1ZtYVc1bFpDSXBEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlFSjFabVpsY2k1bWNtOXRLSE4wY2lrdWRHOVRkSEpwYm1jb0ltSmhjMlUyTkNJcERRb2dJQ0FnSUNBZ0lDQWdJQ0JsYkhObERRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdKMGIyRW9aVzVqYjJSbFZWSkpRMjl0Y0c5dVpXNTBLSE4wY2lrdWNtVndiR0ZqWlNndkpTaGJNQzA1UVMxR1hYc3lmU2t2Wnl3Z0tHMWhkR05vTENCd01Ta2dQVDRnZXcwS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1UzUnlhVzVuTG1aeWIyMURhR0Z5UTI5a1pTZ2lNSGdpSUNzZ2NERXBEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2twRFFvZ0lDQWdJQ0FnSUgwTkNnMEtJQ0FnSUNBZ0lDQnpkR0YwYVdNZ1puSnZiVUpoYzJVMk5DaHpkSElwSUhzTkNpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnUW5WbVptVnlJQ0U5SUNKMWJtUmxabWx1WldRaUtRMEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCQ2RXWm1aWEl1Wm5KdmJTaHpkSElzSUNKaVlYTmxOalFpS1M1MGIxTjBjbWx1WnlncERRb2dJQ0FnSUNBZ0lDQWdJQ0JsYkhObERRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdSbFkyOWtaVlZTU1VOdmJYQnZibVZ1ZENoaGRHOWlLSE4wY2lrdWMzQnNhWFFvSWlJcExtMWhjQ2dvWXlrZ1BUNGdldzBLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnSWlVaUlDc2dLQ0l3TUNJZ0t5QmpMbU5vWVhKRGIyUmxRWFFvTUNrdWRHOVRkSEpwYm1jb01UWXBLUzV6YkdsalpTZ3RNaWtOQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5S1M1cWIybHVLQ0lpS1NrTkNpQWdJQ0FnSUNBZ2ZRMEtEUW9nSUNBZ0lDQWdJR1Z1WTI5a1pTaHpkSElwSUhzTkNpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQkNZWE5sTmpRdWRHOUNZWE5sTmpRb2MzUnlLUTBLSUNBZ0lDQWdJQ0I5RFFvTkNpQWdJQ0FnSUNBZ1pHVmpiMlJsS0hOMGNpa2dldzBLSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUVKaGMyVTJOQzVtY205dFFtRnpaVFkwS0hOMGNpa05DaUFnSUNBZ0lDQWdmUTBLRFFvZ0lDQWdmUTBLSUNBZ0lHTnZibk4wSUhzZ2RHOUNZWE5sTmpRZ2ZTQTlJRUpoYzJVMk5Ec0tDaUFnSUNBdktpb05DaUFnSUNBZ0tpRG9qcmZsajVibHZaUGxpWTFIY21WaGMzbG1iM0pyNmFHMTZaMmk1NXFFNklTYTVweXNTVVFnSUEwS0lDQWdJQ0FxSU9XbWd1YWVuT1c5aytXSmplbWh0ZW1kb3VTNGplYVlyMGR5WldGemVXWnZjbXZvaEpybW5LenBvYlhwbmFJc0lPV0ltZWkvbE9XYm5tNTFiR3dOQ2lBZ0lDQWdLaUJBWVhWMGFHOXlJRmh0WVdSbGNnMEtJQ0FnSUNBcUlFQmpiM0I1Y21sbmFIUWdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERTRJRmh0WVdSbGNnMEtJQ0FnSUNBcUx3MEtEUW9nSUNBZ1kyOXVjM1FnWjJWMFIzSmxZWE41Wm05eWEwbGtJRDBnS0NrZ1BUNGdldzBLSUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUd4dlkyRjBhVzl1SUNFOUlDSjFibVJsWm1sdVpXUWlLU0I3RFFvZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCbmNtVmhjM2xtYjNKclgybGtJRDBnYkc5allYUnBiMjR1YUhKbFppNXRZWFJqYUNndlozSmxZWE41Wm05eWExd3ViM0puWEM4dUtuTmpjbWx3ZEhOY0x5aGNaQ3NwTHlrN0RRb2dJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdaM0psWVhONVptOXlhMTlwWkNBbUppQm5jbVZoYzNsbWIzSnJYMmxrV3pGZERRb2dJQ0FnSUNBZ0lIME5DaUFnSUNCOU93b0tJQ0FnSUM4cUtnMEtJQ0FnSUNBcUlFQmpiR0Z6Y3lCV2FXRlRZM0pwY0hRNklPaTlyT2FOb2lCVmMyVnlVMk55YVhCMEwrYXl1ZWVNdE9pRW11YWNyQ0RsaUxBZ1ZtbGg1cldQNktlSTVabW82SVNhNXB5c0RRb2dJQ0FnSUNvZ0RRb2dJQ0FnSUNvZ1FHRjFkR2h2Y2lCWWJXRmtaWElOQ2lBZ0lDQWdLaUJBWTI5d2VYSnBaMmgwSUVOdmNIbHlhV2RvZENBb1l5a2dNakF4T0NCWWJXRmtaWElOQ2lBZ0lDQWdLaUFOQ2lBZ0lDQWdLaUJUYjNWeVkyVWdRMjlrWlRvZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwxaHRZV1JsY2k5Q2NtbHVaMTlWYzJWeVUyTnlhWEIwWDNSdlgxWnBZUTBLSUNBZ0lDQXFMdzBLRFFvZ0lDQWdZMnhoYzNNZ1ZtbGhVMk55YVhCMElIc05DaUFnSUNBZ0lDQWdZMjl1YzNSeWRXTjBiM0lvZFhObGNsOXpZM0pwY0hRc0lHbGtJRDBnWjJWMFIzSmxZWE41Wm05eWEwbGtLQ2tnZkh3Z1lDUjdibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2w5WUNrZ2V3MEtJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW9aV0ZrWlhJZ1BTQjFjMlZ5WDNOamNtbHdkQTBLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzV6Y0d4cGRDZ2lQVDFWYzJWeVUyTnlhWEIwUFQwaUtWc3hYUTBLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzV6Y0d4cGRDZ2lDbjBwS0NrN0NpQWdJQ0FnSUNBZyJ9")
        document.querySelectorAll(".btn")[2].innerText = install_txt == "卸载成功！" ? "安装" : "卸载"
        swal(install_txt, "", "success")
    } else {
        swal("安装失败！", "需要使用Via浏览器", "error")
    }
}
