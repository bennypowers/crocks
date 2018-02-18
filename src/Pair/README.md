# Pair

```haskell
Pair a b
```

[ desc ]

```javascript
```

## Implements
`Setoid`, `Semigroup`, `Functor`,  `Bifunctor`, `Apply`, `Chain`,
`Traversable`, `Extend`

## Instance Methods

#### equals

```haskell
Pair a b ~> Pair c d -> Boolean
```

[ desc ]

```javascript
```

#### concat

```haskell
Semigroup s, t => Pair s t ~> Pair s t -> Pair s t
```

[ desc ]

```javascript
```

#### map

```haskell
Pair c a ~> (a -> b) -> Pair c b
```

[ desc ]

```javascript
```

#### bimap

```haskell
Pair a b ~> ((a -> c), (b -> d)) -> Pair c d
```

[ desc ]

```javascript
```

#### ap

```haskell
Semigroup s => Pair s (a -> b) ~> Pair s a -> Pair s b
```

[ desc ]

```javascript
```

#### chain

```haskell
Semigroup s => Pair s a ~> (a -> Pair s b) -> Pair s b
```

[ desc ]

```javascript
```

#### sequence

```haskell
Apply f => Pair a (f b) ~> (b -> f b) -> f (Pair a b)
```

[ desc ]

```javascript
```

#### traverse

```haskell
Apply f => Pair a b ~> ((b -> f b), (b -> f c)) -> f (Pair a c)
```

[ desc ]

```javascript
```

#### extend

```haskell
Pair a b ~> (Pair a b -> c) -> Pair a c
```

[ desc ]

```javascript
```

#### swap

```haskell
Pair a b ~> ((a -> c), (b -> d)) -> Pair d c
```

[ desc ]

```javascript
```

#### fst

```haskell
Pair a b ~> () -> a
```

[ desc ]

```javascript
```

#### snd

```haskell
Pair a b ~> () -> b
```

[ desc ]

```javascript
```

#### toArray

```haskell
Pair a b ~> () -> [ a, b ]
```

[ desc ]

```javascript
```

#### merge

```haskell
Pair a b ~> ((a, b) -> c) -> c
```

[ desc ]

```javascript
```

## Helper Functions

#### branch

`crocks/Pair/branch`

```haskell
branch :: a -> Pair a a
```

[ desc ]

```javascript
```

#### toPairs

`crocks/Pair/toPairs`

```haskell
toPairs :: Object -> List (Pair String a)
```

[ desc ]

```javascript
```

## Pointfree Functions

#### fst

`crocks/Pair/fst`

```haskell
fst :: Pair a b -> a
```

[ desc ]

```javascript
```

#### merge

`crocks/Pair/merge`

```haskell
merge :: ((a, b) -> c) -> Pair a b -> c
```

[ desc ]

```javascript
```

#### snd

`crocks/Pair/snd`

```haskell
snd :: Pair a b -> b
```

[ desc ]

```javascript
```

## Transformation Functions

#### writerToPair

`crocks/Pair/writerToPair`

```haskell
writerToPair :: Monoid m => Writer m a -> Pair m a
writerToPair :: Monoid m => (a -> Writer m b) -> a -> Pair m b
```

[ desc ]

```javascript
```
