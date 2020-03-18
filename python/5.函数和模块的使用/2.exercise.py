def is_prime(num):
    """判断一个数是不是素数"""
    for factor in range(2, num):
        if num % factor == 0:
            return False
    return True if num != 1 else False

inputNum = input('请输入一个数')
print(str(is_prime(int(inputNum))))
