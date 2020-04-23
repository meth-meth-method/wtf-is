function factorial(n)
    local x = 1
    for i = 2, n do
        x = x * i
        print(i, x)
    end
    return x
end
count = 0
cache = {}

function fibonacci(n)
    count = count + 1
    if n < 2 then
        return n
    end

    if cache[n] then
        return cache[n]
    end

    r = fibonacci(n - 1) + fibonacci(n - 2)
    cache[n] = r
    return r
end

print("Fib is", fibonacci(100))
print("Called times", count)

--for n, r in pairs(cache) do
--    print(n, r)
--end
