# 什么是 monorepo ?
Monorepo 它是一种管理 organisation 代码的方式，在这种方式下会摒弃原先一个 module 一个 repo 的方式，取而代之的是把所有的 modules 都放在一个 repo 内来管理。
目前诸如 Babel, React, Angular, Ember, Meteor, Jest 等等都采用了 Monorepo 这种方式来进行源码的管理。

# Multirerepos
顾名思义就是一个项目的多个模块分开在多个repo里面 通过npm link链接 或者submodule

# 优缺点
## Multirepos
1.在 Multirepos 方案中我们通常一个项目会有一个 repo 或者说是一个 module 一个 repo，事实上因为项目或者 module 因为功能或者属性或者历史的原因我们不得不拆分到不同的 organisation 中，这导致了后期如果涉及人员交接，或者自己项目管理时就会陷入到不知道哪里去找 repo 的境地。（这个问题对于涉及历史包袱的开发会特别痛苦）

2.issue 不知道往哪里提，导致项目管理混乱。（目前 atool-build、dora 都有这样的困境）

3.版本管理带来的日常开销，首先不得不说采用 semver 后确实给版本管理带来了很多便利之处，但是其偏向于于 patch 版本，当 core module 需要 发布 minor 或者 Major 版本时这就会变成一场灾难。举个例子，dora （插件化 server）的 core 需要变更时，我们得同步所有官方插件，这涉及到了 20 多个仓库，这完全是体力劳动。于此同时，在日常开发中，可能我们一次迭代会涉及多个 repo，一方面需要用 npm link 的方式 hack 到本地仓库，另外一方面，每次都需要手动切换到对应的各个仓库进行 lint test 等操作，要完成这些我们不得不在 terminal 中开启多个 tab，这绝对是个眼力和体力活

4.changelog 梳理又是一场灾难，在 Multirepos 管理项目的情况下，我们需要人工同步所有变动的仓库最终列出一个 changelog。如果全部是由一个人开发还能理得清楚，但实际上一般正常迭代都是多人开发协同开发的模式，这个情况下我们很难统计到仓库依赖的 module 是否有更新，做了什么样的工作。

## monorepo
1.单个 repo 体积较大

# lerna管理monorepo
