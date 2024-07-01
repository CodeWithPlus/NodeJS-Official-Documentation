(module
  (func $add (param $a i32) (param $b i32) (result i32)
    (i32.add
      (get_local $a)
      (get_local $b)
    )
  )
  (export "add" (func $add))
)
