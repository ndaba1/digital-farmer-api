config = {
    "PV_BASE_URL": "https://plantvillage.psu.edu/plants",
    "LOCAL_TEST_URL": "http://localhost:3030/plants",
    "USER-AGENT": "some-usr-agent"
}

headers = {
    "Content-Type": "application/json",
    "User-Agent": config["USER-AGENT"]
}

cabi = [
    'http://127.0.0.1:5500/Puccinia%20sorghi%20(common%20rust%20of%20maize).html']
