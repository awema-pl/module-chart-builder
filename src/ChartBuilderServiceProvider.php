<?php

namespace AwemaPL\ChartBuilder;

use AwemaPL\BaseJS\AwemaProvider;

class ChartBuilderServiceProvider extends AwemaProvider
{

    public function getPackageName(): string
    {
        return 'chart-builder';
    }

    public function getPath(): string
    {
       return __DIR__;
    }
}
