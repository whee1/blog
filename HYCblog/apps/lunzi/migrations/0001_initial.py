# Generated by Django 2.2.3 on 2019-07-15 09:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Activate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(null=True, verbose_name='公告')),
                ('is_active', models.BooleanField(default=False, verbose_name='是否开启')),
                ('add_date', models.DateTimeField(auto_now_add=True, verbose_name='提交日期')),
            ],
            options={
                'verbose_name': '公告',
                'verbose_name_plural': '公告',
            },
        ),
        migrations.CreateModel(
            name='BigCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='文章大分类')),
                ('slug', models.SlugField(unique=True)),
                ('description', models.TextField(default='Lunzi的个人网站', help_text='用来作为SEO中description,长度参考SEO标准', max_length=240, verbose_name='描述')),
                ('keywords', models.TextField(default='IT,技术,博客,Python', help_text='用来作为SEO中keywords,长度参考SEO标准', max_length=240, verbose_name='关键字')),
            ],
            options={
                'verbose_name': '大分类',
                'verbose_name_plural': '大分类',
            },
        ),
        migrations.CreateModel(
            name='Carousel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField(help_text='编号决定图片播放的顺序，图片不要多于5张', verbose_name='编号')),
                ('title', models.CharField(blank=True, help_text='标题可以为空', max_length=20, null=True, verbose_name='标题')),
                ('content', models.CharField(max_length=80, verbose_name='描述')),
                ('img_url', models.CharField(max_length=200, verbose_name='图片地址')),
                ('url', models.CharField(default='#', help_text='图片跳转的超链接，默认#表示不跳转', max_length=200, verbose_name='跳转链接')),
            ],
            options={
                'verbose_name': '图片轮播',
                'verbose_name_plural': '图片轮播',
                'ordering': ['number', '-id'],
            },
        ),
        migrations.CreateModel(
            name='FriendLink',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='网站名称')),
                ('description', models.CharField(blank=True, max_length=100, verbose_name='网站描述')),
                ('link', models.URLField(help_text='请填写http或https开头的完整形式地址', verbose_name='友链地址')),
                ('logo', models.URLField(blank=True, help_text='请填写http或https开头的完整形式地址', verbose_name='网站LOGO')),
                ('create_date', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('is_active', models.BooleanField(default=True, verbose_name='是否有效')),
                ('is_show', models.BooleanField(default=False, verbose_name='是否首页展示')),
            ],
            options={
                'verbose_name': '友情链接',
                'verbose_name_plural': '友情链接',
                'ordering': ['create_date'],
            },
        ),
        migrations.CreateModel(
            name='Keyword',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='文章关键词')),
            ],
            options={
                'verbose_name': '关键词',
                'verbose_name_plural': '关键词',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='文章标签')),
                ('slug', models.SlugField(unique=True)),
                ('description', models.TextField(default='Lunzi的个人网站', help_text='用来作为SEO中description,长度参考SEO标准', max_length=240, verbose_name='描述')),
            ],
            options={
                'verbose_name': '标签',
                'verbose_name_plural': '标签',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='文章分类')),
                ('slug', models.SlugField(unique=True)),
                ('description', models.TextField(default='Lunzi的个人网站', help_text='用来作为SEO中description,长度参考SEO标准', max_length=240, verbose_name='描述')),
                ('bigcategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apps.lunzi.BigCategory', verbose_name='大分类')),
            ],
            options={
                'verbose_name': '分类',
                'verbose_name_plural': '分类',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, verbose_name='文章标题')),
                ('summary', models.TextField(default='文章摘要等同于网页description内容，请务必填写...', max_length=230, verbose_name='文章摘要')),
                ('body', models.TextField(verbose_name='文章内容')),
                ('img_link', models.CharField(default='/static/images/summary.jpg', max_length=255, verbose_name='图片地址')),
                ('create_date', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_date', models.DateTimeField(auto_now=True, verbose_name='修改时间')),
                ('views', models.IntegerField(default=0, verbose_name='阅览量')),
                ('loves', models.IntegerField(default=0, verbose_name='喜爱量')),
                ('slug', models.SlugField(unique=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='作者')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apps.lunzi.Category', verbose_name='文章分类')),
                ('keywords', models.ManyToManyField(help_text='文章关键词，用来作为SEO中keywords，最好使用长尾词，3-4个足够', to='apps.lunzi.Keyword', verbose_name='文章关键词')),
                ('tags', models.ManyToManyField(to='apps.lunzi.Tag', verbose_name='标签')),
            ],
            options={
                'verbose_name': '文章',
                'verbose_name_plural': '文章',
                'ordering': ['-create_date'],
            },
        ),
    ]
