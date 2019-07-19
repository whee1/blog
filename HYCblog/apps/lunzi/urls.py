from django.conf.urls import url
from .views import IndexView
from .views import AboutView,DetailView

urlpatterns=[
    url(r'^$', IndexView.as_view(template_name='index.html'), name='index'),

    url(r'^category/about//$', AboutView, name='about'),
    # 分类页面
    url(r'^category/(?P<bigslug>.*?)/(?P<slug>.*?)/$', IndexView.as_view(template_name='content.html'), name='category'),
    # 归档页面
    url(r'^date/(?P<year>\d+)/(?P<month>\d+)/$', IndexView.as_view(template_name='archive.html'), name='date'),
    # 标签页面
    url(r'^tag/(?P<tag>.*?)/$', IndexView.as_view(template_name='content.html'), name='tag'),
    url(r'article/(?P<slug>.*?)/$',DetailView.as_view(),name='article')
]
'''
   url(r'^category/message//$', MessageView, name='message'),
  
   url(r'^category/donate//$', DonateView, name='donate'),
   url(r'^category/exchange//$', ExchangeView, name='exchange'),
   url(r'^category/project//$', ProjectView, name='project'),
   url(r'^category/question//$', QuestionView, name='question'),
   '''