rep = int(input())
while rep:
    case = str(input().strip())
    k=0
    for i in range(len(case)):
        if case[i]>='A' and case[i]<='Z' and case[i+1]>='0' and case[i+1]<='9':
            k+=1
    if k==1:
        letters=""
        num=""
        for letter in case:
            if letter >= 'A' and letter <= 'Z':
                letters += letter
            else:
                num+=letter
        numRe=0
        for i in range(len(letters)-1,-1,-1):
            
    # else k==2: 
    
    rep -= 1
    