with open('f.txt') as f:
    lines = [line.rstrip() for line in f]
#    a = str.split('\n')
    print([int(s) for s in lines[0][1:-1].split(',')])
 #   print([line for line in f])
#print(list(set(a) & set(b)))
